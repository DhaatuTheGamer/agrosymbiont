const prev = { name: 'err' };
const name = 'name';
const fieldError = '';

const newErrors = { ...prev };
if (fieldError) {
    newErrors[name] = fieldError;
} else {
    delete newErrors[name];
}
console.log(newErrors);

const prev2 = {};
const newErrors2 = { ...prev2 };
if (fieldError) {
    newErrors2[name] = fieldError;
} else {
    delete newErrors2[name];
}
console.log(newErrors2);
