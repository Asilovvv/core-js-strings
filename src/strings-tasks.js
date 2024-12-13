function getStringLength(value) {
  if (typeof value !== 'string') return 0;
  return value.length;
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function concatenateStrings(value1, value2) {
  return value1.concat(value2);
}

function getFirstChar(value) {
  return value.charAt(0);
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

function removeLeadingWhitespaces(value) {
  return value.trimStart();
}

function removeTrailingWhitespaces(value) {
  return value.trimEnd();
}

function repeatString(str, times) {
  return times > 0 ? str.repeat(times) : '';
}

function removeFirstOccurrences(str, value) {
  const index = str.indexOf(value);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + value.length);
}

function removeLastOccurrences(str, value) {
  const index = str.lastIndexOf(value);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + value.length);
}

function sumOfCodes(str) {
  if (typeof str !== 'string') return 0;
  return [...str].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function startsWith(str, substr) {
  return str.startsWith(substr);
}

function endsWith(str, substr) {
  return str.endsWith(substr);
}

function formatTime(minutes, seconds) {
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
    2,
    '0'
  )}`;
}

function reverseString(str) {
  return [...str].reverse().join('');
}

function orderAlphabetically(str) {
  return [...str].sort().join('');
}

function containsSubstring(str, substring) {
  return str.includes(substring);
}

function countVowels(str) {
  const vowels = 'aeiouyAEIOUY';
  return [...str].filter((char) => vowels.includes(char)).length;
}

function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === [...cleaned].reverse().join('');
}

function findLongestWord(sentence) {
  return sentence
    .split(' ')
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ''
    );
}

function reverseWords(str) {
  return str
    .split(' ')
    .map((word) => [...word].reverse().join(''))
    .join(' ');
}

function invertCase(str) {
  return [...str]
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  return value.replace('Hello, ', '').replace('!', '');
}

function unbracketTag(str) {
  return str.replace(/^<|>$/g, '');
}

function extractEmails(str) {
  return str.split(';');
}

function encodeToRot13(str) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const offset = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(
      ((char.charCodeAt(0) - offset + 13) % 26) + offset
    );
  });
}

function getCardId(value) {
  const suits = ['♣', '♦', '♥', '♠'];
  const ranks = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];
  const suit = value.slice(-1);
  const rank = value.slice(0, -1);
  return ranks.indexOf(rank) + suits.indexOf(suit) * ranks.length;
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  startsWith,
  endsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  unbracketTag,
  extractEmails,
  encodeToRot13,
  getCardId,
};
