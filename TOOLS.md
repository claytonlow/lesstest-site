# LessTest Tool Reference

This document covers all 57 tools available in the LessTest editor. Tools are the building blocks of every test — each step in a test corresponds to one tool. Tools are organized into logical categories below.

---

## Table of Contents

1. [Navigation](#navigation)
2. [Mouse Interactions](#mouse-interactions)
3. [Keyboard Interactions](#keyboard-interactions)
4. [Form Interactions](#form-interactions)
5. [Assertions](#assertions)
6. [Waiting & Synchronization](#waiting--synchronization)
7. [Variables & Data](#variables--data)
8. [AI / Semantic](#ai--semantic)
9. [Control Flow](#control-flow)
10. [Network](#network)
11. [Browser Storage](#browser-storage)
12. [Tabs](#tabs)
13. [Debugging & Utilities](#debugging--utilities)

---

## Common Concepts

### Selectors
Many tools require a **CSS selector** to identify the target element. You can:
- Type the selector manually (e.g., `#my-id`, `.my-class`, `[data-testid="submit"]`)
- Use the **Picker button** (crosshair icon) to visually click an element on the page and have the selector filled in automatically. When multiple selector strategies are available, a dropdown lets you choose the best one.

### Variables
Variables are referenced using the `{{variableName}}` syntax. Any text field that accepts variables has a **Variable button** (curly brace icon) to insert variables from the current environment.

### Muting Steps
Every step has a **Mute** toggle in its settings menu. Muted steps are skipped during execution and rendered at reduced opacity.

### Run History
Each step tracks its last 5 execution results. A step that passes sometimes and fails other times is shown with an **orange/flaky** indicator. A consistently failing step shows a **red/error** indicator.

---

## Navigation

### Navigate To URL
**Command ID:** `navigate`

Navigates the browser to a specified URL. This is typically the first step in any test. The URL must include the protocol (`http://` or `https://`).

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| URL | string | Yes | The full URL to navigate to |

**Use cases:**
- Starting a test at a known entry point
- Navigating between pages as part of a workflow
- Testing that redirects work correctly (navigate to source URL, then assert the destination URL)

**Examples:**
```
https://example.com
https://app.mysite.com/login
http://localhost:3000
https://google.com/search?q=test
```

---

### Reload Page
**Command ID:** `reloadPage`

Reloads the current page. No inputs required — simply runs when executed.

**Use cases:**
- Testing that page state is preserved after a reload (e.g., login session, shopping cart)
- Clearing cached UI state before asserting fresh data
- Testing error recovery after a hard refresh

---

## Mouse Interactions

### Click
**Command ID:** `click`

Clicks on an element identified by a CSS selector. Supports the visual picker.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Selector | selector | Yes | CSS selector for the target element |

**Use cases:**
- Clicking buttons, links, menu items
- Triggering any click-based UI interaction
- Submitting forms via a submit button

**Examples:**
```
#submit-button
.btn-primary
[data-testid="login-btn"]
button[type="submit"]
```

---

### Double Click
**Command ID:** `doubleClick`

Double-clicks on an element. Supports the visual picker.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Selector | selector | Yes | CSS selector for the target element |

**Use cases:**
- Opening items in list views or file explorers
- Triggering inline edit modes (e.g., editing a table cell)
- Selecting text programmatically

**Examples:**
```
#editable-cell
.list-item
[data-action="edit"]
td.filename
```

---

### Right Click
**Command ID:** `rightClick`

Right-clicks on an element to trigger the context menu. Supports the visual picker.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Selector | selector | Yes | CSS selector for the target element |

**Use cases:**
- Testing context menu availability and options
- Triggering right-click-specific workflows (e.g., "Open in new tab")

**Examples:**
```
#file-row
.context-target
[data-contextmenu]
tr.data-row
```

---

### Hover
**Command ID:** `hover`

Hovers the mouse cursor over an element without clicking. Supports the visual picker.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Selector | selector | Yes | CSS selector for the target element |

**Use cases:**
- Revealing dropdown menus that appear on hover
- Triggering tooltips for assertion
- Activating CSS hover states before clicking a revealed element

**Examples:**
```
#menu-item
.dropdown-toggle
[data-tooltip]
.user-avatar
```

---

### Drag & Drop
**Command ID:** `dragAndDrop`

Drags an element from a source position and drops it onto a target element. Both selectors support the visual picker.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Source Selector | selector | Yes | CSS selector for the element to drag |
| Target Selector | selector | Yes | CSS selector for the drop target |

**Use cases:**
- Testing kanban boards (drag card between columns)
- Reordering list items
- Testing file upload via drag-and-drop zones

**Examples:**
```
Source: #item-1, Target: #trash-can
Source: .card[data-id="5"], Target: .column-done
```

---

### Scroll
**Command ID:** `scroll`

Scrolls to a specific element or to the top/bottom of the page. Supports both a CSS selector and the keywords `top` or `bottom`. Supports the visual picker.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Scroll Target | string/selector | Yes | CSS selector, `top`, or `bottom` |

**Use cases:**
- Bringing an element into view before interacting with it
- Scrolling to the bottom to trigger infinite scroll loading
- Testing sticky headers/footers as the page scrolls
- Scrolling to reset the viewport before taking a snapshot

**Examples:**
```
.footer
#comments-section
top
bottom
```

---

## Keyboard Interactions

### Press Key
**Command ID:** `pressKey`

Simulates pressing a keyboard key globally. Does not target a specific element — the key press goes to the currently focused element or the document.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Key | string | Yes | Key name to press |

**Supported key names:** Standard DOM `KeyboardEvent.key` values — `Enter`, `Tab`, `Escape`, `ArrowDown`, `ArrowUp`, `ArrowLeft`, `ArrowRight`, `Backspace`, `Delete`, `Space`, and combinations like `Control+A`.

**Use cases:**
- Submitting a form by pressing Enter after filling fields
- Navigating dropdown options with arrow keys
- Closing dialogs with Escape
- Using keyboard shortcuts (e.g., `Control+A` to select all)

**Examples:**
```
Enter
Tab
Escape
ArrowDown
Control+A
```

---

## Form Interactions

### Send Text
**Command ID:** `insertText`

Types text into an input field, textarea, or other text-accepting element. Supports the visual picker for the target element and the variable button for dynamic values.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Target Element | selector | Yes | CSS selector for the input field |
| Text to Send | string | Yes | The text to type |

**Use cases:**
- Filling in login forms (username, password)
- Typing search queries
- Entering data into forms
- Using `{{variableName}}` to inject dynamic test data

**Examples:**
```
Element: #email-input, Text: john@example.com
Element: #password, Text: {{userPassword}}
Element: [name="search"], Text: red sneakers
```

---

### Clear Input
**Command ID:** `clearInput`

Clears all text from an input field or textarea. Supports the visual picker.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Selector | selector | Yes | CSS selector for the input element to clear |

**Use cases:**
- Resetting a field before entering new test data
- Testing that a clear button works correctly
- Clearing an autocomplete field before searching

**Examples:**
```
#email-input
.search-field
[name="username"]
input[type="text"]
```

---

### Check Checkbox
**Command ID:** `check`

Ensures a checkbox or radio button is checked. If the element is already checked, no action is taken (idempotent). Supports the visual picker.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Selector | selector | Yes | CSS selector for the checkbox or radio button |

**Use cases:**
- Accepting terms and conditions checkboxes
- Enabling toggles on settings pages
- Selecting a radio option

**Examples:**
```
#agree-terms
[name="newsletter"]
.remember-me
input[type="checkbox"]
```

---

### Uncheck Checkbox
**Command ID:** `uncheck`

Ensures a checkbox is unchecked. If the element is already unchecked, no action is taken (idempotent). Supports the visual picker.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Selector | selector | Yes | CSS selector for the checkbox |

**Use cases:**
- Opting out of optional features during a test
- Resetting checkboxes to a known unchecked state

**Examples:**
```
#auto-renew
[name="marketing"]
.opt-in-checkbox
```

---

### Select Option
**Command ID:** `selectOption`

Selects an option from a `<select>` dropdown element. Supports the visual picker for the element and the variable button for the option value.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Target Select Element | selector | Yes | CSS selector for the `<select>` element |
| Option Value/Text | string | Yes | The option value or display text to select |

**Use cases:**
- Selecting a country from a dropdown
- Choosing a category filter
- Picking a date/month/year from selects

**Examples:**
```
Element: #country-select, Option: United States
Element: .dropdown, Option: option2
Element: [name="category"], Option: electronics
```

---

### File Upload
**Command ID:** `fileUpload`

Uploads a file to a `<input type="file">` element by fetching the file from a publicly accessible URL. Supports the visual picker for the file input.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| File Input Selector | selector | Yes | CSS selector for `input[type="file"]` |
| File URL | string | Yes | Publicly accessible URL to the file to upload |

**Use cases:**
- Testing avatar/profile image upload
- Testing document upload flows (PDF, CSV)
- Testing file type validation by uploading an invalid file type

**Examples:**
```
Selector: #file-upload, URL: https://example.com/sample.pdf
Selector: input[type="file"], URL: https://placehold.co/600x400.png
```

---

## Assertions

Assertions verify that the page is in the expected state. If an assertion fails, the test step fails and execution stops (unless configured otherwise).

### Assert Visible (Selector)
**Command ID:** `assertVisible`

Asserts that an element matching the selector is present in the DOM and visible. Supports the visual picker.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Selector | selector | Yes | CSS selector for the element that should be visible |

**Use cases:**
- Confirming a success message appeared after form submission
- Verifying an error alert is shown for invalid input
- Checking that a loading spinner has disappeared

**Examples:**
```
.success-message
#error-alert
[data-testid="result"]
.notification.is-visible
```

---

### Assert Text (Selector: Text)
**Command ID:** `assertText`

Asserts that an element contains the expected text content. Supports the visual picker and variable substitution in the expected text.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Target Element | selector | Yes | CSS selector for the element to check |
| Expected Text | string | Yes | The text the element should contain |

**Use cases:**
- Verifying a welcome message shows the user's name
- Confirming an order total is correct
- Checking that a status label shows the right state (e.g., "Active", "Pending")

**Examples:**
```
Element: .title, Text: Welcome to our site
Element: #message, Text: Login successful
Element: [data-testid="status"], Text: Active
Element: .price, Text: {{expectedPrice}}
```

---

### Assert Absence (Selector)
**Command ID:** `assertAbsence`

Asserts that no element matching the selector exists in the DOM. The test fails if the element is found. Supports the visual picker.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Selector | selector | Yes | CSS selector for the element that should NOT be present |

**Use cases:**
- Confirming an error modal is gone after dismissal
- Verifying a loading spinner has finished and is removed
- Ensuring a disabled feature is not rendered

**Examples:**
```
.error-modal
#loading-spinner
[data-testid="error-message"]
.alert-danger
```

---

### Assert URL Contains
**Command ID:** `assertUrl`

Asserts that the current browser URL contains the specified text.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Expected URL | string | Yes | Text that should be present somewhere in the URL |

**Use cases:**
- Confirming the user was redirected to the dashboard after login
- Verifying a checkout success page URL
- Checking query parameters are present (e.g., `?loggedin=true`)

**Examples:**
```
/dashboard
success
example.com
?loggedin=true
```

---

### Assert Attribute
**Command ID:** `assertAttribute`

Asserts that a specific HTML attribute of an element has the expected value. Supports the visual picker.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Target Element | selector | Yes | CSS selector for the element |
| Attribute Name | string | Yes | The HTML attribute name (e.g., `disabled`, `class`, `value`) |
| Expected Value | string | Yes | The expected value of the attribute |

**Use cases:**
- Verifying a submit button is disabled until the form is valid
- Checking that an input has the correct pre-filled value
- Confirming an element has a specific class applied (e.g., `active`)
- Testing ARIA attributes (e.g., `aria-expanded`)

**Examples:**
```
Element: #submit-btn, Attribute: disabled, Value: true
Element: .input-field, Attribute: value, Value: test@example.com
Element: [data-testid="status"], Attribute: class, Value: active
```

---

### Assert Count
**Command ID:** `assertElementCount`

Asserts that a specific number of elements matching the selector are present on the page. Supports the visual picker.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Target Elements | selector | Yes | CSS selector for the elements to count |
| Expected Count | number | Yes | The expected number of matching elements |

**Use cases:**
- Verifying a list has the correct number of items
- Confirming that errors (`.error-message`) are gone (count: 0)
- Testing pagination shows the correct number of items per page

**Examples:**
```
Element: .list-item, Count: 5
Element: .error-message, Count: 0
Element: [data-testid="product"], Count: 10
```

---

### Assert Variable (Name: Value)
**Command ID:** `assertVariable`

Asserts that a test variable holds the expected value. Supports the variable button for referencing other variables.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Variable Name | string | Yes | Name of the variable to check |
| Expected Value | string | Yes | The value the variable should hold |

**Use cases:**
- Verifying that an Extract Variable step captured the right data
- Checking a computed JS Transform result
- Asserting a network capture returned the expected HTTP status code

**Examples:**
```
Variable: loginStatus, Expected: success
Variable: itemCount, Expected: 5
Variable: userRole, Expected: admin
Variable: orderAPI_httpCode, Expected: 200
```

---

## Waiting & Synchronization

### Wait (ms)
**Command ID:** `wait`

Pauses test execution for a fixed number of milliseconds.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Duration | number | Yes | Milliseconds to wait |

**Use cases:**
- Waiting for an animation to complete before asserting
- Adding a short delay before a UI update is visible

> **Tip:** Prefer `Wait for URL` or `Wait for Network Idle` over fixed waits where possible — they make tests faster and more reliable.

**Examples:**
```
500
1000
2000
```

---

### Wait for URL
**Command ID:** `waitForUrl`

Waits until the current URL contains the specified string, or matches a regex pattern. Useful for SPA navigation where URL changes happen without a full page reload.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| URL Pattern | string | Yes | Substring, full URL, or regex (`regex:.*\/users\/\d+`) |

**Use cases:**
- Waiting for an SPA router to navigate to a new route after a click
- Waiting for a redirect to complete (e.g., after login)
- Waiting for a URL query parameter to appear

**Examples:**
```
/dashboard
success
https://example.com/login
regex:.*\/users\/\d+
```

---

### Wait for Network Idle
**Command ID:** `waitNetworkIdle`

Waits until there are no active network requests (XHR, Fetch, images, etc.). Useful for ensuring a page is fully loaded before asserting.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Timeout (ms) | number | No | Max time to wait (defaults to 10000ms) |

**Use cases:**
- Waiting for an initial API call to finish before asserting data
- Ensuring a form submission has completed before checking for a success message
- Waiting after navigating to a data-heavy page

**Examples:**
```
5000
15000
(leave empty for default 10000ms)
```

---

## Variables & Data

### Set Variable
**Command ID:** `setVariable`

Sets a test variable to a specific value. Variables can be referenced later using `{{variableName}}`.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Variable Name | string | Yes | Name of the variable to set |
| Variable Value | string | Yes | The value to assign |

**Use cases:**
- Defining a base URL or shared credential for a test suite
- Setting flags for conditional logic (e.g., `loginRequired = true`)
- Resetting a counter variable before a loop

**Examples:**
```
Variable: baseUrl, Value: https://api.example.com
Variable: username, Value: testuser@example.com
Variable: timeout, Value: 5000
```

---

### Get Current URL
**Command ID:** `getCurrentUrl`

Extracts the current page URL and stores it in a variable.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Variable Name | string | Yes | Name of the variable to store the URL in |

**Use cases:**
- Capturing the URL after a redirect to assert it later
- Storing a deeply linked page URL to navigate back to
- Debugging by logging the current URL

**Examples:**
```
currentUrl
redirectedTo
landingPage
```

---

### Extract to Variable
**Command ID:** `extractVariable`

Extracts the text content of an element and stores it in a variable. Supports the visual picker.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Target Element | selector | Yes | CSS selector for the element to extract from |
| Variable Name | string | Yes | Name of the variable to store the extracted text |

**Use cases:**
- Capturing a generated ID, order number, or token from the page
- Extracting a displayed price to assert later
- Reading the current username from a profile header

**Examples:**
```
Element: #order-id, Variable: orderNumber
Element: .price, Variable: itemPrice
Element: [data-testid="user-email"], Variable: currentUser
```

---

### Random String
**Command ID:** `randomString`

Generates a random string of a specified length and stores it in a variable. Character types (uppercase, lowercase, numbers, special characters) are configurable via checkboxes.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Variable Name | string | Yes | Name of the variable to store the random string |
| Length | number | Yes | Length of the generated string (1–256) |
| Character Types | options | No | Checkboxes: Uppercase, Lowercase, Numbers, Special |

**Use cases:**
- Generating unique passwords for user creation tests
- Creating random email prefixes (`{{randomStr}}@test.com`)
- Generating API tokens or session keys for mock scenarios

**Examples:**
```
Variable: randomPassword, Length: 12, Types: Uppercase + Lowercase + Numbers + Special
Variable: username, Length: 8, Types: Lowercase + Numbers
Variable: verificationCode, Length: 6, Types: Numbers
```

---

### Unique Name
**Command ID:** `uniqueName`

Generates a human-readable unique name by combining words from selected dictionaries. Useful for creating test data that is unique but readable.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Variable Name | string | Yes | Name of the variable to store the generated name |
| Word Dictionaries | checkboxes | No | Adjectives, Animals, Colors, Names, Countries, Languages, Star Wars, Numbers |
| Separator | string | No | Character between words (default: space) |
| Text Style | select | No | `lowercase`, `UPPERCASE`, or `Capitalized` |

**Use cases:**
- Creating unique project or team names in tests (`happy-tiger`, `BlueWhale_42`)
- Generating test user display names
- Naming test data entities that are easy to identify in logs

**Examples:**
```
Variable: projectName, Dicts: [adjectives, animals], Separator: -, Style: Capitalized
Variable: serverName, Dicts: [colors, starwars], Separator: _, Style: lowercase
```

---

### Date/Time Variable
**Command ID:** `dateTime`

Creates a variable containing the current date and/or time, formatted using a [dayjs](https://day.js.org/docs/en/display/format) format string. A live preview is shown in the editor.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Variable Name | string | Yes | Name of the variable to store the formatted date/time |
| Format | string | Yes | dayjs format string (e.g., `YYYY-MM-DD`) |

**Common dayjs format tokens:**
| Token | Output |
|-------|--------|
| `YYYY` | 2024 |
| `MM` | 01–12 |
| `DD` | 01–31 |
| `HH` | 00–23 |
| `mm` | 00–59 |
| `ss` | 00–59 |

**Use cases:**
- Generating a timestamp for a unique test record name
- Populating a "date of birth" or "expiry date" field with today's date
- Testing date-based filtering or sorting

**Examples:**
```
Variable: currentDate, Format: YYYY-MM-DD
Variable: timestamp, Format: YYYY-MM-DD HH:mm:ss
Variable: shortDate, Format: DD/MM/YYYY
Variable: isoDate, Format: YYYY-MM-DDTHH:mm:ssZ
```

---

## AI / Semantic

### Solve Semantic Instruction
**Command ID:** `solveSemantic`

Uses AI (LLM) to interpret and execute natural language instructions on the page. Describe what you want to do in plain English, and the AI finds the right element and performs the action. An optional target selector can narrow the AI's focus.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Instruction | string | Yes | Plain English description of the action to perform |
| Target Element | selector | No | Optional CSS selector to hint the AI towards a region |

**Use cases:**
- Performing complex interactions that are hard to capture with a single tool
- Writing resilient steps that adapt when the UI changes (e.g., "Click the primary call-to-action button")
- Rapidly prototyping tests without knowing exact selectors
- Handling dynamic or context-dependent UI (e.g., "Dismiss whatever modal is open")

**Examples:**
```
Find the login button and click it
Fill out the registration form with test data
Scroll to the bottom of the page and click 'Load More'
Take a screenshot of the results table
```

---

## Control Flow

### If/Else Condition
**Command ID:** `ifElse`

Executes conditional logic: runs one branch if an assertion passes, another if it fails. Each branch can either execute an existing test or run a set of inline tools.

**Configuration:**
1. **Assertion Condition** — Choose from: Assert Visible, Assert Text, Assert Absence, Assert URL, Assert Attribute, Assert Count, Assert Variable
2. **If True (Then)** — Execute a test OR add multiple inline tools
3. **If False (Else)** — Execute a test OR add multiple inline tools

**Inline tools available in branches:** Navigate, Click, Send Text, Wait, Alert, Log, User Input, Take Snapshot, Set Variable

**Use cases:**
- Handling optional login flows (if already logged in, skip login)
- Retrying or skipping steps based on page state
- Running different test paths based on feature flags
- Gracefully handling modals that may or may not appear

**Examples:**
```
IF URL contains "dashboard" → Execute "Dashboard Smoke Test"
IF element ".error-message" is visible → Execute "Error Recovery Test"
IF variable "userRole" equals "admin" → Click "#admin-panel" (inline)
IF element count ".notifications" equals 0 → Log "No notifications" (inline)
```

---

### Execute Test
**Command ID:** `executeTest`

Executes another saved test inline as part of the current test. All steps of the selected test run before continuing.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Test to Execute | select | Yes | Select from saved tests in the project |

**Use cases:**
- Reusing a "Login" test as a setup step in every other test
- Composing complex flows from modular sub-tests
- Running a "Cleanup" test at the end to reset state

**Examples:**
```
Execute: Login Test (before running the main test flow)
Execute: Seed Test Data
Execute: Common Checkout Flow
```

---

### DataSet
**Command ID:** `dataSet`

Loads a dataset (CSV or table) and loops through each row, injecting column values as test variables. All steps between a `DataSet` step and the corresponding `End DataSet` step execute once per row.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Dataset | select | Yes | Select a saved dataset |
| Column → Variable Mapping | table | Auto | Maps each column to a variable name (editable) |

A **preview** of the first 3 rows is shown after selecting a dataset. Column names become variable names by default, but can be remapped.

**Use cases:**
- Running the same login test with multiple user credentials
- Testing form validation with a variety of valid and invalid inputs
- Data-driven E2E testing across multiple environments or configurations

**Example flow:**
```
DataSet (users.csv)
  → Insert Text {{email}} into #email
  → Insert Text {{password}} into #password
  → Click #submit
  → Assert Visible .dashboard
End DataSet
```

---

### End DataSet
**Command ID:** `endDataSet`

Marks the closing boundary of a `DataSet` loop. Renders as a visual separator line in the editor. No configuration required.

Must always be paired with a preceding `DataSet` step.

---

## Network

### Start Network Capture
**Command ID:** `startNetworkCapture`

Starts listening for network requests matching a URL pattern. Can operate in three modes:
- **Capture Only** (default) — records the request/response for inspection
- **Intercept & Fulfill** — replaces the response with a custom mock
- **Intercept & Abort** — blocks the request entirely

Can optionally extract values from the response body using JSONPath.

**Fields:**
| Field | Type | Description |
|-------|------|-------------|
| Capture Name | string | Unique identifier referenced by `Wait for Capture` |
| Endpoint Pattern | string | URL pattern with `*` wildcards or `/regex/` |
| Request Method | select | ANY, GET, POST, PUT, DELETE, PATCH |
| Intercept Mode | select | captureOnly, fulfill, abort |
| Response Status | number | (fulfill mode) HTTP status code to return |
| Content Type | string | (fulfill mode) Response content type |
| Response Body | textarea | (fulfill mode) Body of the mocked response |
| JSONPath Extractions | rows | Variable name + JSONPath to extract from response |

**Auto-generated variables** (available after `Wait for Capture`):
- `{captureName}_httpCode` — HTTP status code
- `{captureName}_url` — Matched URL
- `{captureName}_responseTime` — Response time in ms

**Use cases:**
- Asserting an API is called with the correct payload
- Mocking a failing API to test error-handling UI
- Extracting a token or ID from an API response for use in later steps
- Blocking analytics/tracking calls to speed up tests

**Examples:**
```
Capture: orderAPI, Pattern: */api/orders/*, Mode: captureOnly
Capture: authToken, Pattern: */auth/login, Extract: $.data.token → loginToken
Capture: mockError, Pattern: */api/submit, Mode: fulfill, Status: 500, Body: {"error": "fail"}
```

---

### Wait for Capture
**Command ID:** `waitForCapture`

Blocks test execution until a previously started network capture receives a matching response, or until a timeout elapses.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Capture Name | string | Yes | Must match the name from a `Start Network Capture` step |
| Timeout (ms) | number | No | Max wait time (default: 10000ms) |
| On Timeout | select | No | `Fail Test` or `Continue (skip extraction)` |

Always pair with `Start Network Capture`. Place `Start Network Capture` before the action that triggers the request, then use `Wait for Capture` after.

**Use cases:**
- Waiting for an API call triggered by clicking a button
- Synchronizing test steps with async backend operations
- Asserting the status code or extracted data from a captured response

**Example flow:**
```
Start Network Capture (orderAPI, */api/orders/*)
Click #place-order
Wait for Capture (orderAPI, timeout: 10000)
Assert Variable (orderAPI_httpCode: 200)
```

---

### Webhook
**Command ID:** `webhook`

Executes a full HTTP request (GET, POST, PUT, PATCH, DELETE) directly from the test, without requiring any browser interaction. Supports custom headers, JSON/form/raw body, and response extraction via JSONPath or Regex.

**Fields:**
| Field | Type | Description |
|-------|------|-------------|
| Webhook Name | string | Unique identifier for auto-generated variables |
| URL | string | The endpoint URL (supports `{{variables}}`) |
| Method | select | GET, POST, PUT, PATCH, DELETE |
| Headers | key-value rows | Custom request headers |
| Body Format | select | JSON, Form Data, Raw Text |
| Body | textarea | Request body (hidden for GET) |
| Response Extractions | rows | Variable, type (JSONPath/Regex), expression |

**Auto-generated variables:**
- `{webhookName}_httpCode` — HTTP status code
- `{webhookName}_url` — Request URL
- `{webhookName}_responseTime` — Response time in ms

**Use cases:**
- Creating test data via API before running a UI test
- Cleaning up test data via API after a test
- Testing API integrations directly
- Fetching an auth token via API to use in subsequent browser steps

**Examples:**
```
POST https://api.example.com/users, Body: {"email": "{{userEmail}}", "role": "admin"}
  → Extract: $.data.id → newUserId

GET https://api.example.com/products
  → Extract: $[0].price → firstProductPrice
```

---

### Route Network Request
**Command ID:** `routeNetworkRequest`

Intercepts and routes network requests matching a URL pattern. Similar to `Start Network Capture` in fulfill/abort mode, but is a persistent route that applies to all matching requests for the duration of the test (not a one-time capture).

**Fields:**
| Field | Type | Description |
|-------|------|-------------|
| Route Name | string | Unique identifier for this route |
| URL Pattern | string | Glob (`*/api/*`) or Regex |
| Action | select | Fulfill, Abort, Continue |
| Status | number | HTTP status code (for Fulfill) |
| Content Type | string | Response content type (for Fulfill) |
| Response Body | textarea | Mocked response body (for Fulfill) |

**Use cases:**
- Permanently mocking an API for the entire test
- Blocking third-party scripts or ads that interfere with testing
- Simulating server errors to test frontend resilience

**Examples:**
```
Route: MockUser, Pattern: */users/123, Action: Fulfill, Status: 200, Body: {"id":123,"name":"Test"}
Route: BlockAds, Pattern: */ads/*, Action: Abort
Route: ForceError, Pattern: */api/submit, Action: Fulfill, Status: 500
```

---

## Browser Storage

### Set Cookie
**Command ID:** `setCookie`

Sets a browser cookie with a specified name, value, and domain URL.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Cookie Name | string | Yes | Name of the cookie |
| Cookie Value | string | Yes | Value to set |
| URL (Domain) | string | Yes | URL/domain where the cookie is valid |

**Use cases:**
- Pre-setting an authentication cookie to skip login during tests
- Setting feature flags stored in cookies
- Testing cookie-dependent behavior

**Examples:**
```
Name: session_id, Value: abc123xyz, URL: https://app.example.com
Name: theme, Value: dark, URL: https://example.com
```

---

### Delete Cookie
**Command ID:** `deleteCookie`

Deletes a browser cookie by name and domain URL.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Cookie Name | string | Yes | Name of the cookie to delete |
| URL | string | Yes | URL/domain of the cookie |

**Use cases:**
- Resetting auth state by clearing session cookies
- Testing behavior when a required cookie is missing

---

### Set Local Storage
**Command ID:** `setLocalStorage`

Sets a `localStorage` item. The value persists across page reloads within the same origin.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Key | string | Yes | localStorage key |
| Value | string | Yes | Value to store |

**Use cases:**
- Pre-configuring user preferences without going through the settings UI
- Setting feature flags stored in localStorage
- Seeding cached data for performance testing

**Examples:**
```
Key: theme, Value: dark
Key: token, Value: eyJhbG...
Key: userPrefs, Value: {"lang":"en"}
```

---

### Get Local Storage
**Command ID:** `getLocalStorage`

Reads a `localStorage` item and stores it in a test variable.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Key | string | Yes | localStorage key to read |
| Variable Name | string | Yes | Variable to store the retrieved value |

**Use cases:**
- Verifying that the app saved the correct data to localStorage
- Extracting an auth token stored in localStorage for use in an API call

**Examples:**
```
Key: authToken, Variable: token
Key: userSettings, Variable: settings
```

---

### Remove Local Storage
**Command ID:** `removeLocalStorage`

Removes a `localStorage` item by key.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Key | string | Yes | localStorage key to remove |

**Use cases:**
- Cleaning up after a test to avoid state bleed
- Testing behavior when a cached item is missing

---

### Set Session Storage
**Command ID:** `setSessionStorage`

Sets a `sessionStorage` item. The value persists until the browser tab is closed.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Key | string | Yes | sessionStorage key |
| Value | string | Yes | Value to store |

**Use cases:**
- Setting session-scoped state without going through the UI
- Pre-loading flash messages or temporary session data for testing

---

### Get Session Storage
**Command ID:** `getSessionStorage`

Reads a `sessionStorage` item and stores it in a test variable.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Key | string | Yes | sessionStorage key to read |
| Variable Name | string | Yes | Variable to store the retrieved value |

---

### Remove Session Storage
**Command ID:** `removeSessionStorage`

Removes a `sessionStorage` item by key.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Key | string | Yes | sessionStorage key to remove |

---

## Tabs

### New Tab
**Command ID:** `newTab`

Opens a new browser tab and switches the test context to it. Optionally navigates to a URL immediately.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| URL | string | No | URL to open in the new tab (leave blank for `about:blank`) |

**Use cases:**
- Testing multi-tab workflows
- Opening a link that launches in a new tab
- Testing cross-tab communication

---

### Switch Tab
**Command ID:** `switchTab`

Switches the active test context to a different open browser tab. Can match by title, URL, tab index, the most recently opened tab, or tab ID.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Match By | select | Yes | Title, URL, Index, Newest, ID |
| Match Value | string | No | The value to match (not needed for "Newest") |

**Use cases:**
- Switching back to the original tab after a link opened a new one
- Coordinating multi-tab test flows
- Verifying that a new tab was opened with the correct URL

**Examples:**
```
Match: Newest
Match: Title → "Login Page"
Match: URL → /dashboard
Match: Index → 0
```

---

### Close Tab
**Command ID:** `closeTab`

Closes a browser tab. Can target the current tab or match a tab by title/URL pattern.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Target | select | Yes | `Current` or `Match` |
| Match Value | string | No | Title or URL pattern (only for "Match" target) |

**Use cases:**
- Cleaning up extra tabs opened during a test
- Closing a popup or auxiliary window
- Returning to a main tab after completing a sub-workflow

---

## Debugging & Utilities

### Take Snapshot
**Command ID:** `takeSnapshot`

Captures a screenshot of the current page state. No configuration required — the snapshot is automatically saved and viewable in the test run results.

**Use cases:**
- Visual regression checkpoints
- Capturing the page state before and after a significant action
- Documenting test flow for review

---

### Log Message
**Command ID:** `log`

Prints a message to the test execution log. Does not affect test execution.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Message | string | Yes | The message to log |

Supports variable interpolation: `Variable x is: {{x}}`

**Use cases:**
- Debugging test data values mid-execution
- Adding progress markers to long tests
- Logging decision points in conditional flows

**Examples:**
```
Starting login process
Current user email: {{email}}
Checkpoint: Passed form validation
```

---

### Alert Message
**Command ID:** `alert`

Displays a browser alert dialog with a message during test execution. Pauses execution until the user dismisses the dialog.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Message | string | Yes | The message to display |

**Use cases:**
- Interactive debugging — pause execution to inspect the page
- Step-by-step walkthroughs for demos or recorded walkthroughs

---

### User Input
**Command ID:** `userInput`

Prompts the test runner for input during execution and stores the response in a variable. Pauses execution until the user provides input.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Variable Name | string | Yes | Variable to store the user's response |
| Prompt Message | string | Yes | The message shown to the user |

**Use cases:**
- Semi-automated tests where a human must provide dynamic data (e.g., a CAPTCHA answer, OTP, or 2FA code)
- Interactive test scenarios for demonstrations

**Examples:**
```
Variable: otp, Prompt: Enter the OTP from your email
Variable: username, Prompt: Enter your username to test with
```

---

### JS Transform
**Command ID:** `jsTransform`

Executes custom JavaScript code in a sandboxed environment to transform test variables. The code has access to a `variables` object containing all current test variables, and must `return` the value to store.

Features a full **CodeMirror 6** code editor with JavaScript syntax highlighting.

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Output Variable | string | Yes | Variable name to store the result |
| JavaScript Code | code | Yes | JS code with access to `variables` |

**Available in code:**
- `variables` — Object with all current test variable values
- `return` — Returns the value to store in the output variable

**Use cases:**
- Parsing a JSON string captured from a network response
- Extracting a substring or applying regex to a variable
- Computing derived values (e.g., combining first + last name)
- Formatting or normalizing data before asserting

**Examples:**
```js
// Parse JSON and extract a field
const data = JSON.parse(variables.webhookResponse);
return data.user.email;

// Extract first name from full name
return variables.fullName.split(" ")[0];

// Strip currency symbol
return variables.price.replace("$", "").trim();

// Build a combined value
return `${variables.firstName}_${variables.lastName}`.toLowerCase();
```

---

## Tool Field Schema Reference

Each tool defines a `fieldSchema` that describes its data fields. This schema drives both the editor UI and the test execution engine.

| Field Type | Description |
|------------|-------------|
| `string` | Plain text input |
| `number` | Numeric input |
| `selector` | CSS selector input — enables the visual Picker button and selector cycling |
| `select` | Dropdown with predefined options |
| `options` | Multi-checkbox selection |
| `boolean` | True/false toggle |

The `selectorField` property identifies which field contains the primary CSS selector (used for the element picker and self-healing selector logic).

---

## Base Tool Capabilities

All tools inherit from `BaseTool` and share these common features:

| Feature | Description |
|---------|-------------|
| **Mute** | Skip this step during execution (rendered at reduced opacity) |
| **Run History** | Last 5 pass/fail results shown via color-coded indicators |
| **Error Display** | Last error message shown as a badge; flaky steps shown in orange |
| **Info Button** | Shows tool description, usage, and examples inline |
| **Play Button** | Executes only this single step in isolation (run-step mode) |
| **Picker Button** | Visual element picker — click any element on the page to fill the selector field |
| **Variable Button** | Insert a `{{variable}}` reference from the current environment |
| **Cycle Button** | Switch between alternative selector strategies captured by the Picker |
