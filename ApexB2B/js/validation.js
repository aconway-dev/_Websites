/**
  Very simple, dependency-free form validation. Currently only
  checks for existence of a value.

  To use:
  Call `validateForm` in the onsubmit attribute of a form element

  ```
  <form onsubmit="return validateForm(['requiredField1', 'requiredField2'])"">
  ```

  Error inputs are given an `error` class.
*/

/**
  @param fields {Array} - Array of input ID's you want to check
*/
function validateForm(fields) {
  var isValid = false;

  for (var i = 0; i < fields.length; i++) {
    var field = document.getElementById(fields[i]);
    if (field.value === '') {
      field.className.replace(' error', '');
      field.className = field.className + ' error';
      isValid = false;
    } else {
      field.className = field.className.replace(' error', '');
      isValid = true;
    }
  }

  if (!isValid) {
    return false;
  }
}