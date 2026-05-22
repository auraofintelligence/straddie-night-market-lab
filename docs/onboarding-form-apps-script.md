# Onboarding Form Apps Script

The Onboarding page form uses a separate Apps Script Web App from the Research contact form.

The pipeline is:

1. Visitor fills out the onboarding form.
2. The website generates the markdown onboarding record.
3. Visitor clicks `Submit onboarding form`.
4. The website posts the structured fields and markdown record to Apps Script.
5. Apps Script saves the markdown record as a `.md` file in Google Drive.
6. Apps Script appends one tidy row to a private Google Sheet, including the Drive file link.
7. Apps Script emails `sbt4183@gmail.com` with the Drive link.
8. The website shows a sent message.

## Files

- Apps Script receiver: `apps-script/onboarding-form.gs`
- Site form: `mapper.html`
- Site JavaScript hook: `app.js`

## Deployment Steps

1. Open Google Apps Script.
2. Create a new project.
3. Name it `Straddie Market Onboarding Form`.
4. Delete the starter code in `Code.gs`.
5. Paste the contents of `apps-script/onboarding-form.gs`.
6. Save.
7. In the function dropdown at the top, choose `setupOnboardingScript`.
8. Click `Run`.
9. Authorise the script when Google asks. This permission check needs Gmail, Sheets and Drive access.
10. Deploy as a Web App.
11. Set `Execute as` to the script owner.
12. Set access to `Anyone`.
13. Copy the deployed Web App URL.
14. Paste the URL into `ONBOARDING_SCRIPT_URL` in `app.js`.

On the first successful submission, the script creates a private Google Sheet in the deploying account's Drive:

`Straddie Market Onboarding Form Responses`

It also creates a Drive folder for the markdown records:

`Straddie Market Onboarding Records`

If you want to use an existing Sheet, paste its spreadsheet ID into `SHEET_ID` inside `apps-script/onboarding-form.gs` before deployment.

If you want to use an existing Drive folder for record files, paste the folder ID into `RECORD_FOLDER_ID` inside `apps-script/onboarding-form.gs` before deployment.

## Sheet Columns

- timestamp
- intent
- participant_type
- display_name
- follow_up_contact
- public_permission
- public_contact
- location
- season
- availability
- category
- stall_size
- site_needs
- insurance
- food_check
- next_step
- record_filename
- record_file_url
- status
- notes

The full markdown record is not stored inside the Sheet or attached to the email. It is saved as one Drive `.md` file and linked from the Sheet and notification email.

## If Submissions Fail

Open Apps Script, then check:

1. `Executions` in the left sidebar.
2. The latest failed run.
3. The error message and line number.

The current script catches most failures and emails `sbt4183@gmail.com` with the subject:

`Straddie Market Onboarding Form Error`

If Drive file creation fails but the rest works, the Sheet row will still be created and the email will show the Drive failure message in the record link field.

If the error says:

`You do not have permission to call DriveApp.createFolder`

run `setupOnboardingScript` once from inside Apps Script, approve the Drive permission, then redeploy the Web App as a new version. This means Google has authorised the script owner to create the record folder and save the markdown files.

After pasting any script update, redeploy the Web App as a new version:

1. `Deploy`
2. `Manage deployments`
3. Pencil/edit icon
4. `Version` -> `New version`
5. `Deploy`

## Agent Rules

- Do not replace this with `mailto:`.
- Do not replace this with a Gmail compose URL.
- Keep it one-click for public users once the Apps Script URL is deployed.
- If no Apps Script URL is configured, keep the submit button disabled.
- Keep the Sheet private unless the user explicitly asks to share it.
