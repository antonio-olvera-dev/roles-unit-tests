class CommentsController{
    constructor(){}

    //---Get Users---
    getUsers(req,res){
            
        res.send('Get Users');
    };

    //---Set Users---
    setUsers(req,res){
        
        res.send('SetUsers');
    };

    //--------------------------------------

    //---Get Admin---
    getAdmin(req,res){
        
        res.send('Get Admin');
    };

    //---Set Admin---
    setAdmin(req,res){
        
        res.send('SetAdmin');
    };

}

export const commentsController = new CommentsController();