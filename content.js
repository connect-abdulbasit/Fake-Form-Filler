chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fillAllForms") {
    fillFormWithFakeData();
  } else if (request.action === "clearForm") {
    clearAllForm();
  }
});

function fillFormWithFakeData() {
  const fakeNames = ["John", "Jane", "Alice", "Bob", "Charlie"];
  const fakeEmails = ["johndoe@example.com", "janesmith@example.com"];
  const fakePhones = ["1234567890", "0987654321"];
  const fakeWebsites = ["https://example.com", "https://sample.com"];
  const fakeNumbers = ["42", "99", "123"];
  const fakeDates = ["1990-01-01", "2000-12-30"];
  const fakePasswords = ["password123", "secret"];
  const fakeComments = [
    "This is a sample comment",
    "Lorem ipsum dolor sit amet",
  ];
  const fakeColors = ["#FF5733", "#33FF57", "#3357FF"];
  const fakeMonths = ["2023-05", "2024-06"];
  const fakeTimes = ["12:30", "08:45"];
  const fakeWeeks = ["2024-W01", "2024-W10"];
  const fakeBoolean = [true, false];

  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const formElements = document.querySelectorAll("input, select, textarea");

  formElements.forEach((element) => {
    const type = element.type.toLowerCase();

    switch (type) {
      case "text":
        element.value = getRandomItem(fakeNames);
        break;
      case "email":
        element.value = getRandomItem(fakeEmails);
        break;
      case "tel":
        element.value = getRandomItem(fakePhones);
        break;
      case "url":
        element.value = getRandomItem(fakeWebsites);
        break;
      case "number":
        element.value = getRandomItem(fakeNumbers);
        break;
      case "date":
        element.value = getRandomItem(fakeDates);
        break;
      case "datetime-local":
        element.value = `${getRandomItem(fakeDates)}T${getRandomItem(
          fakeTimes
        )}`;
        break;
      case "password":
        element.value = getRandomItem(fakePasswords);
        break;
      case "textarea":
        element.value = getRandomItem(fakeComments);
        break;
      case "checkbox":
      case "radio":
        element.checked = getRandomItem(fakeBoolean);
        break;
      case "color":
        element.value = getRandomItem(fakeColors);
        break;
      case "month":
        element.value = getRandomItem(fakeMonths);
        break;
      case "time":
        element.value = getRandomItem(fakeTimes);
        break;
      case "week":
        element.value = getRandomItem(fakeWeeks);
        break;
      case "range":
        element.value = Math.floor(Math.random() * 100);
        break;
      case "search":
        element.value = "Sample search query";
        break;
      case "select":
        if (element.options.length > 1) {
          element.selectedIndex = 1;
        }
        break;
    }
  });
}

function clearAllForm() {
  const formElements = document.querySelectorAll("input, textarea");
  formElements.forEach((element) => {
    if (
      element.type !== "submit" &&
      element.type !== "reset" &&
      element.type !== "button" &&
      element.type !== "checkbox" &&
      element.type !== "radio" &&
      element.type !== "file" &&
      element.type !== "option" &&
      element.type !== "select"
    ) {
      element.value = "";
    }
  });
}
