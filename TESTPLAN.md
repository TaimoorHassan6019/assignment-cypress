# Cypress End-to-End Test Plan

## 1. Introduction
This document outlines the detailed test plan for the GIF search and display application. The testing strategy utilizes Cypress for automated End-to-End (E2E) testing, ensuring that  application behaviors such as loading trending GIFs, searching for specific queries, and infinite scrolling function correctly before deployment.

## 2. Test Architecture
- **Framework:** Cypress
- **Language:** TypeScript
- **Target Environments:** Production
- **Strategy:** testing focusing on front-end UI and API integration. Network requests to the image endpoints are intercepted to validate API contracts (status codes, response payloads).

## 3. Test Scenarios

### 3.1 Initial Load (Trending GIFs)
**File:** `loadgifphotos.cy.ts`
- **Objective:** Verify that the application successfully fetches and displays a list of trending GIFs upon initial launch.
- **Pre-conditions:** The application is accessible and the user visits the root URL `/`.
- **Test Steps:**
  1. Intercept the `GET **/v1/gifs/trending*` API request.
  2. Visit the homepage.
  3. Wait for the API request to resolve.
- **Expected Results:**
  - The API responds with a `200 OK` status.
  - The API payload contains exactly 15 GIF objects.
  - Each GIF object includes a valid `title` and an image URL string (`images.original.url`).
  - The UI dynamically renders `<img>` tags for the loaded GIFs.

### 3.2 Search Functionality
**File:** `search.cy.ts`
- **Objective:** Ensure the user can search for specific GIFs and view the corresponding results.
- **Pre-conditions:** The user is on the homepage and the search input is visible.
- **Test Steps:**
  1. Intercept the `GET **/v1/gifs/search*` API request.
  2. Locate the search input field.
  3. Clear any existing text type a query (e.g. "apples") and press `Enter`.
  4. Wait for the search API request to resolve.
- **Expected Results:**
  - The intercepted request URL includes the correct query parameter (`q=apples`).
  - The API responds with a `200 OK` status.
  - The API payload contains exactly 15 filtered GIF objects matching the format criteria.
  - The UI updates and renders new `<img>` elements based on the search results.

### 3.3 Pagination / Infinite Scrolling
**File:** `scrolltillend.cy.ts`
- **Objective:** Validate that the application fetches additional GIFs when the user scrolls to the bottom of the page.
- **Pre-conditions:** The application has completed its initial load of trending GIFs.
- **Test Steps:**
  1. Intercept the `GET **/v1/gifs/trending*` API request.
  2. Visit the homepage and wait for the initial load to complete.
  3. Programmatically scroll to the absolute bottom of the page window.
  4. Wait for the UI mechanism to trigger the new fetch.
  5. Check the alias to count the number of intercepted requests.
- **Expected Results:**
  - The total number of requests made to the trending API endpoint is strictly greater than 1 proving that scrolling triggered pagination.

## 4. Execution & Integration Strategy
- Tests can be run interactively using `npx cypress open` or headlessly via `npx cypress run`.
- It is recommended to configure these tests as a required check in the CI/CD pipeline. Test failures should automatically capture browser screenshots and videos for rapid debugging.
