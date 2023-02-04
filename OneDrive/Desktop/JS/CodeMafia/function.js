//関数は実行可能なオブジェクト
//コールバック関数
//他の関数に引数として渡される関数
function hello(name) {
    console.log('hello' + name);//仮引数がhelloに渡ってくるので、実引数をとることで使用することができる
}

function fn(cb) {
    cb('Tom');//仮引数を与える
}

fn(hello);
//helloがfnに渡ってくるため、fnの内部で処理される

setTimeout(hello,2000);

//this
//呼び出し元のオブジェクトへの参照を保持するキーワード
//thisはオブジェクトのメソッドとして実行される場合、呼び出し元オブジェクトを参照。関数として実行される場合、グローバルオブジェクトを参照する。
window.name = 'John';
const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello' + this.name);//person.nameと同義
        //→Hello Tom
        a();//→Hello John

        const person = {
            name: 'Tim',
            hello: function() {
                console.log('Hello' + this.name);//person.nameと同義
                //→Hello Tom
                a();//→Hello John
            }
        }
    }
}
person.hello();

function a() {
    console.log('hello' + this.name);
}

//コールバック関数とthis
const person1 = {
    name: 'Mary',
    hello: function() {
        console.log('Hello' + this.name);
    }
}
person1.hello();
function fn(ref) {
    ref();//ここでhelloを実行しているため、関数として実行されている
}

fn(person1.hello);
//メソッドをほかの変数に代入しているのと同じ
//person.helloをfn()に渡しているので、helloプロパティのfuncitonをrefに渡すことになる