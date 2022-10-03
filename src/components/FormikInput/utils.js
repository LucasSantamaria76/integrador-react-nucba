import calculateSize from 'calculate-size';

export const widthWord = (word) =>
  calculateSize(word, {
    font: 'Roboto',
    fontSize: '1.1rem',
  }).width;

export const handleEnter = (e) => {
  if (e.key.toLowerCase() === 'enter') {
    const form = e.target.form;
    const index = [...form].indexOf(e.target);
    form.elements[index + 1].focus();
    e.preventDefault();
  }
};
