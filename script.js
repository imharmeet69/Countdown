const boldBtn = document.getElementById("bold-btn");
const italicBtn = document.getElementById("italic-btn");
const clearBtn = document.getElementById("clear-btn");
const saveBtn = document.getElementById("save-btn");
const notepad = document.getElementById("notepad");

boldBtn.addEventListener('click', () => {
  notepad.classList.toggle('bold');
});

italicBtn.addEventListener('click', () => {
  notepad.classList.toggle('italic');
});

clearBtn.addEventListener("click" , () => {
  notepad.textContent = '';
});


saveBtn.addEventListener('click', () => {
  const content = notepad.innerHTML;
  localStorage.setItem('savedNote', content);
  alert('Note saved!');
});

// Load saved content from localStorage (if available)
window.addEventListener('load', () => {
  const savedNote = localStorage.getItem('savedNote');
  if (savedNote) {
      notepad.innerHTML = savedNote;
  }
}); 
