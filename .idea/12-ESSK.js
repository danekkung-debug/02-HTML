//1. 원시 값에 대한 복사
// 원시값은 stack 메모리 영에에 그대로 쓰여지고, 그 값을 읽어서 그대로 복사

var price = 1000;
var salep = price; // stack 영여의 price 변수 값 1000을 그대로 saleprice 저장

// 이 시점에서 priced엔 1000, saleprice엔 1000

saleprice = 800;
console.log(preprice);  // 1000  800




// 2. 객체 (창조자류형)에 대한 '말은 복사'
var cart = { item: "사과:,count: 1"};

// stack 영역의 csrt 변수에는 하나의 칸만 존재하므로
// 2개ㅢ 프로피티를 저장하기 위해heap 메모리 영역에 2칸을 확보하고 프로피티를 저장

// cart 라는 변수에는 주소값, heap 따로 데이터 존재

var samecart = cart; // dart라는 변수에 있는 값을 samecart 에 할당
// 결국, samecart와 cart는 같은 '주소값'을 갖게됨

samecart.cart= 5;
console.log(CART.count);  //5
consele.log(cart === samecart); // cart에 지정된 주소값, samevart에 저장된주소값

console.log()  // 화면에



// 일상행활에서의 복사라는건, 같은 내용늘 사진 다른 종이를 만들어내는 일
// 깊은 복사
car original = {
    name :"홍길동",
    address: {ciru: " 서울" }
};

// 첫번쨰 방법 : obiecr asskgn()
// obiect.assegm() : 원본을
