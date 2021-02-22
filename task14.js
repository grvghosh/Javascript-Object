function func(object){
    var result = "" ; 
	const traverse = directory => {
    for (let index in directory) {
        if (directory[index] && typeof directory[index] === "object") {
           traverse(directory[index]);
        } else {
           result += directory[index] + "\n";
        }
    }
    return result;
    };
    return traverse(object);
}
module.exports = func ;
