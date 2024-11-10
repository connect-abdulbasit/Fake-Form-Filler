document.getElementById("fillForm").addEventListener("click", () => {
  // Send a message to the content script to fill the form
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: fillFormWithFakeData,
    });
  });
});

// Function to be executed in the page context to fill the form with random data
function fillFormWithFakeData() {
  const fakeNames = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
    "Charlie Davis",
  ];
  const fakeEmails = [
    "johndoe@example.com",
    "janesmith@example.com",
    "alicej@example.com",
    "bobb@example.com",
    "charlied@example.com",
  ];
  const fakePhones = [
    "1234567890",
    "0987654321",
    "5551234567",
    "6669876543",
    "7776543210",
  ];
  const fakeWebsites = [
    "https://example.com",
    "https://sample.com",
    "https://testsite.com",
    "https://mywebsite.com",
  ];
  const fakeNumbers = ["42", "99", "123", "7", "2023"];
  const fakeDates = [
    "1990-01-01",
    "1985-05-15",
    "2000-12-30",
    "1975-08-22",
    "1995-07-11",
  ];
  const fakeComments = [
    "This is a sample comment",
    "Lorem ipsum dolor sit amet",
    "Just testing the form",
    "Random comment here",
    "Another sample comment",
  ];

  // Helper function to get a random item from an array
  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const formElements = document.querySelectorAll("input, select, textarea");

  formElements.forEach((element) => {
    const type = element.type.toLowerCase();

    if (type === "text") {
      element.value = getRandomItem(fakeNames);
    } else if (type === "email") {
      element.value = getRandomItem(fakeEmails);
    } else if (type === "tel") {
      element.value = getRandomItem(fakePhones);
    } else if (type === "url") {
      element.value = getRandomItem(fakeWebsites);
    } else if (type === "number") {
      element.value = getRandomItem(fakeNumbers);
    } else if (type === "date") {
      element.value = getRandomItem(fakeDates);
    } else if (type === "textarea") {
      element.value = getRandomItem(fakeComments);
    } else if (type === "radio" || type === "checkbox") {
      element.checked = true;
    } else if (element.tagName.toLowerCase() === "select") {
      if (element.options.length > 0) {
        element.selectedIndex = 1; // Choose the second option by default
      }
    }
  });
}
