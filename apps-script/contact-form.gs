var RECIPIENT_EMAIL = "sbt4183@gmail.com";
var EMAIL_SUBJECT = "Straddie Market Onboarding Contact Form";
var SHEET_ID = "";
var SHEET_NAME = "Contact Form Responses";
var SHEET_HEADERS = [
  "timestamp",
  "name",
  "email",
  "subject",
  "message",
  "form_source",
  "status",
  "notes"
];

function doPost(e) {
  var data = e && e.parameter ? e.parameter : {};
  var name = clean_(data.name);
  var email = clean_(data.email);
  var subject = clean_(data.subject);
  var message = clean_(data.message);
  var source = clean_(data.form_source || "Straddie Market Onboarding");
  var timestamp = new Date();

  var body = [
    "Straddie Market Onboarding contact form",
    "",
    "Name: " + name,
    "Email: " + email,
    "Subject: " + subject,
    "Source: " + source,
    "",
    "Message:",
    message,
    "",
    "Submitted: " + timestamp.toISOString()
  ].join("\n");

  appendContactRow_({
    timestamp,
    name,
    email,
    subject,
    message,
    source,
    status: "new",
    notes: ""
  });

  MailApp.sendEmail({
    to: RECIPIENT_EMAIL,
    replyTo: email || RECIPIENT_EMAIL,
    subject: EMAIL_SUBJECT,
    body: body
  });

  return HtmlService
    .createHtmlOutput("<!doctype html><title>Sent</title><p>Message sent.</p>")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function appendContactRow_(record) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    var sheet = getContactSheet_();
    ensureHeaderRow_(sheet);
    sheet.appendRow([
      record.timestamp,
      record.name,
      record.email,
      record.subject,
      record.message,
      record.source,
      record.status,
      record.notes
    ]);
  } finally {
    lock.releaseLock();
  }
}

function getContactSheet_() {
  var spreadsheet = getContactSpreadsheet_();
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function getContactSpreadsheet_() {
  if (SHEET_ID) {
    return SpreadsheetApp.openById(SHEET_ID);
  }

  var properties = PropertiesService.getScriptProperties();
  var existingId = properties.getProperty("CONTACT_SHEET_ID");
  if (existingId) {
    return SpreadsheetApp.openById(existingId);
  }

  var spreadsheet = SpreadsheetApp.create("Straddie Market Onboarding Contact Form Responses");
  properties.setProperty("CONTACT_SHEET_ID", spreadsheet.getId());
  return spreadsheet;
}

function ensureHeaderRow_(sheet) {
  var headerRange = sheet.getRange(1, 1, 1, SHEET_HEADERS.length);
  var currentHeaders = headerRange.getValues()[0];
  var hasHeaders = currentHeaders.some(function (value) {
    return String(value || "").trim();
  });

  if (!hasHeaders) {
    headerRange.setValues([SHEET_HEADERS]);
    sheet.setFrozenRows(1);
  }
}

function clean_(value) {
  return String(value || "").trim();
}
