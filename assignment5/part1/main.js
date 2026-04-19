// === SHOW/HIDE COMMENTS SECTION ===

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Start hidden
commentWrapper.style.display = 'none';

// Click support
showHideBtn.addEventListener('click', toggleComments);

// Keyboard support (Enter key)
showHideBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    toggleComments();
  }
});

function toggleComments() {
  const isHidden = commentWrapper.style.display === 'none';

  if (isHidden) {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
}



// === ADDING NEW COMMENTS ===

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  submitComment();
});

function submitComment() {
  const nameValue = nameField.value.trim();
  const commentValue = commentField.value.trim();

  if (nameValue === '' || commentValue === '') {
    return; // ignore empty submissions
  }

  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  list.appendChild(listItem);

  nameField.value = '';
  commentField.value = '';
}
