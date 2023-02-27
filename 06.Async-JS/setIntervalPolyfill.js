/* 
   polyfill -->
   A script that updates/adds new functions is called “polyfill”. 
   It “fills in” the gap and adds missing implementations.

*/

function createSetInterval(){
    let intervalId = 0;
    let intervalMap = {};

    function setIntervalPolyfill(cb , delay=0){
        var id = intervalId++;

        function repeat(){
            intervalMap[id] = setTimeout(() => {
                cb();

                if(intervalMap[id]){
                    repeat();
                }
            }, delay);
        }

        repeat();

        return id;
    }

    function clearIntervalPolyfill(intervalId){
        clearTimeout(intervalMap[intervalId]);
        delete intervalMap[intervalId];
    }

    return { setIntervalPolyfill, clearIntervalPolyfill }
}


const{setIntervalPolyfill , clearIntervalPolyfill} = createSetInterval();


// TESTING the above created function(polyfill)
let counter = 0;
let id;

function hello(){
    counter++;
    console.log("Hello Mohit");

    if(counter >= 5){
        clearIntervalPolyfill(id)
    }
}

id = setIntervalPolyfill(hello,2000)