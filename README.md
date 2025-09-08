<!-- question 1 -->

var ->

    var এর আগে থেকে JavaScript এ ব্যবহার করা হয়ে আসছে। var এর মাধ্যমে একই নামের একাধিক  variable declare করা যাই যার কারণে সমস্যা হয়ে থাকে। এবং var ES5 এ তৈরি করা হয়েছে বা সময় থেকে ব্যবহার করা হয়ে আসছে 

let ->

    এটি ES6 এ নতুন করে তৈরি করা হয়েছে। এটি Block Scope এর ভিতরে সীমাবদ্ধ। একই নামের একাধিক variable declare করা যাই না। যার ফলে একই নামের variable থাকবে না । কিন্তু শুধু এর value গুলো পরিবর্তন করা যায়।

const ->

    const এর value পরিবর্তন করা যাই না। এটি ও ES6 এ তৈরি করা হয়েছে। এটি ও Block Scope এর ভিতরে সীমাবদ্ধ। একবার একটা নামে variable declare করা যাই। এটার value পরিবর্তন করা যাই না । কিন্তু non-primitive data types এ ভেতরের মান গুলো পরিবর্তন করা যাই

<!-- question 2 -->

forEach() -> 

    forEach Loop করার জন্য ব্যবহার করা হয়। এই Loop এর মধ্যে কোনো return করে না Undefined return করে। এটি শুধু array এর প্রতিটি element এর উপর কাজ করে। 

map() ->

    এটি প্রতিটি element এর উপর কাজ করে। এটি নতুন করে একটি array return করে। মান পরিবর্তন করে নতুন array তে দেয়। 

filter() -> 

    condition দিয়ে element বেছে নেয়। নতুন array return করে। শুধু সেই element গুলো রাখে যেগুলো শর্ত মেনে চলে। 

    


<!-- question 4 -->

arrow functions -> 

    ES6 এ function লিখার শর্টকাট হলো Arrow Function। ছোট ও সুন্দর syntax।নিজের this নেই বাইরে থেকে this নেয়।
    যেমন const aFunction = () => {
        
    }
    আর যদি একটা parameter থাকে তাইলে () দিতে হয় না 

Destructuring assignment ->

    Destructuring মানে হলো array বা object এর ভিতর থেকে আলাদা আলাদা variable এ মান নিয়ে আসতে কাজ করে। 
    যেমন
    array -> 
        array এর ক্ষেত্রে পজিশন দিয়ে মান বের করে
        const numbers = [10, 20, 30];

        const [a, b, c] = numbers;

        আবার এখানে একটা বা যতটা মান ইচ্ছা Skip করা যাই , , দিয়ে যেমন 

        const numbers = [10, 20, 30 , 40 , 50];

        const [a, b, , , e] = numbers;

    object -> 
        object এর ক্ষেত্রে key নাম দিয়ে মান বের করে
        const user = {
                id: 1,
                info: {
                    username: "Morshed",
                    email: "Morshed@gmail.com"
                    }
                };

                const { info: { username, email } } = user;


<!-- question 5 -->

Template Literals ->
    Template Literals ES6 এ তৈরি করা হয়েছে। আগে যে আমরা string এর সাথে dynamic data বসাতে হত তখন + দিয়ে দিয়ে বসাতে হত  কিন্তু Template Literals এর মাধ্যমে আমরা সহ যে dynamic data বসাতে পারি এবং Template Literals ব্যবহারের জন্য প্রথমে `` ব্যবহার করতে হবে এবং যে স্থানে dynamic data বসাতে হবে সেখানে ${} এটা ব্যবহার করে ${} এর ভেতরে data গুলো লেখা হয়
    
