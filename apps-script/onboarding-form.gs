var RECIPIENT_EMAIL = "sbt4183@gmail.com";
var EMAIL_SUBJECT = "Straddie Market Onboarding Form";
var SHEET_ID = "";
var RECORD_FOLDER_ID = "";
var SHEET_NAME = "Onboarding Responses";
var SHEET_HEADERS = [
  "timestamp",
  "intent",
  "participant_type",
  "display_name",
  "follow_up_contact",
  "public_permission",
  "public_contact",
  "location",
  "season",
  "availability",
  "category",
  "stall_size",
  "site_needs",
  "insurance",
  "food_check",
  "next_step",
  "record_filename",
  "record_file_url",
  "status",
  "notes"
];

function setupOnboardingScript() {
  getOnboardingSheet_();
  getRecordFolder_();
  MailApp.getRemainingDailyQuota();
}

function doPost(e) {
  try {
    var data = e && e.parameter ? e.parameter : {};
    var timestamp = new Date();
    var recordMarkdown = clean_(data.record_markdown);
    var recordFilename = clean_(data.record_filename || "market-onboarding-record.md");
    var siteNeeds = collectMulti_(e, "siteNeeds");
    var recordFileUrl = "";

    try {
      var recordFile = saveRecordFile_(recordFilename, recordMarkdown);
      recordFileUrl = recordFile.getUrl();
    } catch (fileError) {
      recordFileUrl = "Drive file save failed: " + fileError.message;
    }

    appendOnboardingRow_({
      timestamp: timestamp,
      intent: clean_(data.intent),
      participantType: clean_(data.participantType),
      displayName: clean_(data.displayName),
      followUpContact: clean_(data.followUpContact),
      publicPermission: clean_(data.publicPermission),
      publicContact: clean_(data.publicContact),
      location: clean_(data.location),
      season: clean_(data.season),
      availability: clean_(data.availability),
      category: clean_(data.category),
      stallSize: clean_(data.stallSize),
      siteNeeds: siteNeeds,
      insurance: clean_(data.insurance),
      foodCheck: clean_(data.foodCheck),
      nextStep: clean_(data.nextStep),
      recordFilename: recordFilename,
      recordFileUrl: recordFileUrl,
      status: "new",
      notes: ""
    });

    var body = [
      "Straddie Market Onboarding form submission",
      "",
      "Name / group: " + clean_(data.displayName),
      "Follow-up contact: " + clean_(data.followUpContact),
      "Intent: " + clean_(data.intent),
      "Participant type: " + clean_(data.participantType),
      "Location: " + clean_(data.location),
      "Season: " + clean_(data.season),
      "Category: " + clean_(data.category),
      "Next step: " + clean_(data.nextStep),
      "Submitted: " + timestamp.toISOString(),
      "",
      "Generated markdown record:",
      recordFileUrl,
      "",
      "The Sheet row stores this Drive link instead of the full markdown text."
    ].join("\n");

    var emailOptions = {
      to: RECIPIENT_EMAIL,
      replyTo: clean_(data.followUpContact) || RECIPIENT_EMAIL,
      subject: EMAIL_SUBJECT,
      body: body
    };

    MailApp.sendEmail(emailOptions);

    return HtmlService
      .createHtmlOutput("<!doctype html><title>Sent</title><p>Onboarding record sent.</p>")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  } catch (error) {
    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      subject: "Straddie Market Onboarding Form Error",
      body: "The onboarding Apps Script failed.\n\nError:\n" + error.stack
    });

    return HtmlService
      .createHtmlOutput("<!doctype html><title>Error</title><p>Onboarding form error. The site owner has been notified.</p>")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
}

function appendOnboardingRow_(record) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    var sheet = getOnboardingSheet_();
    ensureHeaderRow_(sheet);
    sheet.appendRow([
      record.timestamp,
      record.intent,
      record.participantType,
      record.displayName,
      record.followUpContact,
      record.publicPermission,
      record.publicContact,
      record.location,
      record.season,
      record.availability,
      record.category,
      record.stallSize,
      record.siteNeeds,
      record.insurance,
      record.foodCheck,
      record.nextStep,
      record.recordFilename,
      record.recordFileUrl,
      record.status,
      record.notes
    ]);
  } finally {
    lock.releaseLock();
  }
}

function getOnboardingSheet_() {
  var spreadsheet = getOnboardingSpreadsheet_();
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function getOnboardingSpreadsheet_() {
  if (SHEET_ID) {
    return SpreadsheetApp.openById(SHEET_ID);
  }

  var properties = PropertiesService.getScriptProperties();
  var existingId = properties.getProperty("ONBOARDING_SHEET_ID");
  if (existingId) {
    return SpreadsheetApp.openById(existingId);
  }

  var spreadsheet = SpreadsheetApp.create("Straddie Market Onboarding Form Responses");
  properties.setProperty("ONBOARDING_SHEET_ID", spreadsheet.getId());
  return spreadsheet;
}

function ensureHeaderRow_(sheet) {
  var headerRange = sheet.getRange(1, 1, 1, SHEET_HEADERS.length);
  headerRange.setValues([SHEET_HEADERS]);
  sheet.setFrozenRows(1);
}

function saveRecordFile_(filename, markdown) {
  var folder = getRecordFolder_();
  var safeName = filename || "market-onboarding-record.md";
  var blob = Utilities.newBlob(markdown || "", "text/markdown", safeName);
  return folder.createFile(blob);
}

function getRecordFolder_() {
  if (RECORD_FOLDER_ID) {
    return DriveApp.getFolderById(RECORD_FOLDER_ID);
  }

  var properties = PropertiesService.getScriptProperties();
  var existingId = properties.getProperty("ONBOARDING_RECORD_FOLDER_ID");
  if (existingId) {
    return DriveApp.getFolderById(existingId);
  }

  var folder = DriveApp.createFolder("Straddie Market Onboarding Records");
  properties.setProperty("ONBOARDING_RECORD_FOLDER_ID", folder.getId());
  return folder;
}

function collectMulti_(e, name) {
  if (!e || !e.parameters || !e.parameters[name]) {
    return "";
  }
  return e.parameters[name].map(function (value) {
    return clean_(value);
  }).filter(Boolean).join(", ");
}

function clean_(value) {
  return String(value || "").trim();
}
