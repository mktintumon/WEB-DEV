const fs = require('fs')
const path = require('path')

function organisefn(dirname){
    let destPath;
    
       if(dirname == undefined){ // input -> blank
           console.log("Please enter a valid directory path")
           return;
       }
       else{
           let doesExist = fs.existsSync(dirname) // exists or not
    
           // if path exists then do the work , else not valid path
           if(doesExist==true){
               destPath = path.join(dirname , 'organised_file')
                
                //if folder path not exists then work , else already exists
                if(fs.existsSync(destPath)==false){
                    fs.mkdirSync(destPath)
                }
                else{
                    console.log('Folder already exists')
                }
            }
    
            else{
            console.log('Please enter valid path')
            }
       }
    
       organiseHelper(dirname,destPath)
    }
    
    //helps in categorize our files
    function organiseHelper(src , dest){
        let childnames = fs.readdirSync(src) // get all files inside a folder
         //console.log(childnames)   
    
        for(let i=0 ; i<childnames.length ;i++){
             let childAddress = path.join(src,childnames[i]) // makes path for each file
    
             let isFile = fs.lstatSync(childAddress).isFile() // check whether path is for file?
             
            if(isFile == true){
                let fileCategory = getCategory(childnames[i])
                console.log(childnames[i]+ "  belongs to  " + fileCategory)
                
                sendFiles(childAddress , dest , fileCategory)
            }
        }
    
    }
    
    let types = {
        media: ["mp4", "mkv", "mp3" , "jpg"],
        archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
        documents: ["docx","doc","pdf","xlsx","xls","odt","odf","txt"],
        app: ["exe", "dmg", "pkg", "deb"],
    };

    function getCategory(name){
        let ext = path.extname(name) // -> .txt .pdf .mp4
        ext = ext.slice(1)           // -> txt pdf mp4
        
        for(let type in types){
            let catTypeArr = types[type] //-> mp4 mp3 .... txt pdf ....exe...
            
            for(let i=0 ; i<catTypeArr.length ;i++){
                if(ext == catTypeArr[i])
                // we matched the extensions with the values presnet in catTypeArr
    
                return type //-> document apps media archieve
            }
        
        }  
        return 'Others'
    }
    
    function sendFiles(srcFilePath , dest , fileCategory){
        let catPath = path.join(dest , fileCategory)
    
        //check if the created path exists or not
        if(fs.existsSync(catPath) == false){
            fs.mkdirSync(catPath)
        }
    
        let filename = path.basename(srcFilePath) // taking out the base name
        let destFilePath = path.join(catPath , filename)
    
        fs.copyFileSync(srcFilePath , destFilePath) // copied files from src to dest
    
        fs.unlinkSync(srcFilePath) // deleted the files from src
    
        console.log(filename + "  is copied to  " + fileCategory)
    }


    module.exports={
        organisorKey : organisefn
    }    

    
