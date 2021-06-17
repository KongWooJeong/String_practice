/* 1. 문자열 생성 */

/* 문자열 리터럴 */
const testStr = "공우정";
console.log(testStr); // 공우정

/* 문자열 생성자 */
const testStr2 = new String("공우정");
console.log(testStr2); // 공우정

/*
const testStr3 = new String(공우정);
console.log(testStr3);
*/

const testStr4 = new String(123);
console.log(testStr4); // 123

const testStr5 = new String('123');
console.log(testStr5); // 123

/* 문자열 생성자 방식 예외 */
let testStr6 = new String(undefined);
console.log(testStr6);

testStr6 = new String(null);
console.log(testStr6);

testStr6 = new String(Number);
console.log(testStr6); 

/* new String() 과 String() 차이 */
let testStr7 = new String("공우정");
console.log(typeof testStr7, testStr7); // Object.... 공우정

testStr7 = String("공우정");
console.log(typeof testStr7, testStr7); // String.... 공우정

/* 2. 문자열 프로퍼티 */

/* length */
let testStr8 = "공우정";
console.log(testStr8.length); // 3

testStr8 = new String("공우정");
console.log(testStr8.length); // 3

testStr8 = "    공우정    ";
console.log(testStr8.length); // 11 ... 공백도 길이값에 포함된다.

/* 3. 문자열 메서드 */

/* charAt */
let testStr9 = "공우정";
console.log(testStr9.charAt(0)); // 공
console.log(testStr9.charAt(1)); // 우
console.log(testStr9.charAt(2)); // 정

testStr9 = new String("공우정");
console.log(testStr9.charAt(0)); // 공
console.log(testStr9.charAt(1)); // 우
console.log(testStr9.charAt(2)); //

for(let i = 0; i < testStr9.length; i++) {
    console.log(testStr9.charAt(i)); // 공..... 우...... 정
}

for (index in testStr9) {
    console.log(testStr9.charAt(index)); // 공..... 우...... 정
}

/* concat */
let testStr10 = "kong";
console.log(testStr10.concat("woo")); // 인수 1개 => kongwoo
console.log(testStr10); // kong => 원본문자열은 바뀌지 않는다.

console.log(testStr10.concat("woo", 'jeong')); // 인수 2개 이상 => kongwoojeong

console.log('woo'.concat('jeong')); // woojeong => 그냥 값에도 concat 함수 사용 가능

/* indexOf */
let testStr11 = "kkoonngg";
console.log(testStr11.indexOf('k')); // 0
console.log(testStr11.indexOf('o')); // 2
console.log(testStr11.indexOf('g')); // 6

console.log(testStr11.indexOf('on')); // 3
console.log(testStr11.indexOf('ng')); // 5

console.log(testStr11.indexOf('k', 1)); // 1
console.log(testStr11.indexOf('o', 3)); // 3
console.log(testStr11.indexOf('g', 7)); // 7

console.log(testStr11.indexOf('l')); // -1

let testStr12 = "kong woo";

if(testStr12.indexOf('kong') !== -1) {
    console.log("해당 단어가 존재한다.");
}

/* lastIndexOf */
let testStr13 = 'kkoonngg';

console.log(testStr11.lastIndexOf('k')); // 1
console.log(testStr11.lastIndexOf('o')); // 3
console.log(testStr11.lastIndexOf('g')); // 7

console.log(testStr11.lastIndexOf('on')); // 3
console.log(testStr11.lastIndexOf('ng')); // 5

console.log(testStr11.lastIndexOf('k', 0)); // 0
console.log(testStr11.lastIndexOf('o', 2)); // 2
console.log(testStr11.lastIndexOf('g', 6)); // 6

console.log(testStr11.lastIndexOf('l')); // -1

/* replace */
let testStr14 = "kong woo jeong";

console.log(testStr14.replace('kong', 'k')); // k woo jeong
console.log(testStr14); // 원본배열은 바뀌지 않는다. 

console.log(testStr14.replace('o', 'k')); // kkng woo jeong => 첫번째로 발견된 문자가 바뀐다.

console.log(testStr14.replace('k', "")); // ong woo jeong => 해당 문자 삭제 

console.log(testStr14.replace('o', ' ')); // k ong woo jeong => 해당 문자 공백 생성 

console.log(testStr14.replace('p', 'o')); // kong woo jeong => 해당 문자가 없은 원본 문자열 그대로 반환

/* split */
let testStr15 = 'What your id';

console.log(testStr15.split(' ')); // ['what', 'your', 'id']

console.log(testStr15.split(' ', 1)); // ["What"] => 해당 구분자로 나누고 요소 1개 반환

console.log(testStr15.split(''));  //["W", "h", "a", "t", " ", "y", "o", "u", "r", " ", "i", "d"]

let testStr16 = 'wh/at yo/ur i/d';

console.log(testStr16.split('/')); // ["wh", "at yo", "ur i", "d"]

/* substring */
let testStr17 = 'woo jeong';

console.log(testStr17.substring(2)); // o jeong => 두번째 인자 값이 없을 경우엔 해당 문자열 끝까지 반환

console.log(testStr17.substring(0,3)); // woo 

console.log(testStr17.substring(-2)); // woo jeong => 음수를 인자로 전달하면 문자열 전체 반환

console.log(testStr17.substring(3, -1)); // woo => substring(-1, 3) -> substring(0, 3)으로 해석된다. 

console.log(testStr17.substring(3, 18)); //  jeong 인자가 문자열 길이보다 클경우 문자열 길이 값이 들어간다.

/* slice */
let testStr18 = 'woo jeong';

console.log(testStr18.substring(-5)); // woo jeong => 문자열 전체 반환
console.log(testStr18.slice(-5)); // jeong => 문자열 끝에서 역으로 5개 만큼 반환. 

/* toLowerCase */
let testStr19 = 'KONG WOOJEONG';

console.log(testStr19.toLowerCase()); // kong woojeong => 소문자 변환
console.log(testStr19); // KONG WOOJEONG => 원본 문자열 변경 안됨.

/* toUpperCase */
let testStr20 = 'kong woojeong';

console.log(testStr20.toUpperCase()); // KONG WOOJEONG
console.log(testStr20); // kong woojeong => 원본 문자열 변경 안됨

/* trim */
let testStr21 = '   kong    ';

console.log(testStr21.trim()); // kong => 공백 제거 
console.log(testStr21.trimStart()); // kong    => 처음 공백 제거 
console.log(testStr21.trimEnd()); //     kong => 마지막 공백 제거

/* repeat */
let testStr22 = 'kong';

console.log(testStr22.repeat(2)); // kongkong => 전달된 수 만큼 반복
console.log(testStr22.repeat(4)); // kongkongkongkong
console.log(testStr22.repeat(4.7)); // kongkongkongkong => 실수는 내림으로 인식
//console.log(testStr22.repeat(-1)); // 오류 발생

/* includes */
let testStr23 = 'kong woo jeong';

console.log(testStr23.includes('kong')); // true
console.log(testStr23.includes('woo')); // true
console.log(testStr23.includes('ko')); // true
console.log(testStr23.includes(' k')); // false
console.log(testStr23.includes('wow')); // false
console.log(testStr23.includes(' ')); // true