function func(){
    var object = {
        pyramid: function(int , char) {
            var n = int ;
            var out = "" ;
            for(let i=1; i<= n; i++){
                let str = " ".repeat(n-i);
                let str2 = char. repeat(i*2 -1)
                let ret = str + str2 + "\n" 
                out = out + ret 
            }
            return out;
        },
        diamond: function(int , char) {
            var out1 = "" ;
            var out2 = "" ;
            var n = int ;
            for(let i=1; i <= n; i++){
                let str = ' '.repeat(n -i);
                let str2 = (char+' ').repeat(i)
                let ret = str + str2 + "\n" 
                out1 = out1 + ret   
            }
            for(let i=n; i >= 1; i--){
                let str = ' '.repeat(n -i);
                let str2 = (char+' ').repeat(i)
                let ret = str + str2 + "\n" 
                out2 = out2 + ret 
            }
            return (out1 +out2);
        }
    }
    return object ;
}
module.exports = func;
