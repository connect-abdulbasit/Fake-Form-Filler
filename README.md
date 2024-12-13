# Fake Form Filler

**Fake Form Filler** is a simple browser extension designed to help developers automate form filling during debugging and testing. It saves time and effort by pre-filling forms with dummy data or clearing them when needed.

---

## **Features**
- Automatically fills forms with predefined values.
- Option to fill forms by right-clicking and selecting "Fill" from the context menu.
- Clear all fields in a form with a single click.

---

## **Installation**

Follow these steps to set up and use the extension locally:

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/Fake-Form-Filler.git
```

### **2. Open Your Browser's Extensions Page**
- **Chrome**: Go to `chrome://extensions/`
- **Edge**: Go to `edge://extensions/`

### **3. Enable Developer Mode**
- Toggle the switch for "Developer mode" in the top-right corner of the Extensions page.

### **4. Load the Extension**
1. Click on the "Load unpacked" button.
2. Select the folder where you cloned the repository.

### **5. Start Using the Extension**
- Click on the extension icon to fill a form.
- Right-click anywhere on a webpage and select "Fill" from the context menu.
- Use the "Clear" button to reset all fields.

---

## **How to Customize**

You can customize the form-filling data by editing the `content.js` file in the repository:
```javascript
const formData = {
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "123-456-7890",
  address: "123 Main St, Springfield",
};
```
Update the `formData` object with the desired values for your forms.

---

## **Demo Video**
Check out the demo video to see how it works:

---

## **Contributing**
Feel free to fork the repository and submit pull requests for new features or bug fixes.

---

## **License**
This project is licensed under the MIT License. See the LICENSE file for details.

---

If you encounter any issues or have suggestions, feel free to open an issue on GitHub or contact me directly!
