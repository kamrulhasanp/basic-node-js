var mysql= require('mysql');


var DatabaseConnectionConfig={
    host:"localhost",
    user:"root",
    password:"",
    database: "school"
}

var con=mysql.createConnection(DatabaseConnectionConfig);

con.connect(function (error){
    if(error){
        console.log("Connection failed")
    }
    else {
        console.log("Connection success")
         //InsertData(con)
        //DeleteData(con)
        //UpdateData(con)
        SelectData(con)
    }
});

function InsertData(con){

    let InsertQuery="INSERT INTO `students_list`(`std_name`, `std_roll`, `std_class`, `std_phone_number`, `std_city`) VALUES ('Hasan','09','Eleven','1111111','Sendai')"
    con.query(InsertQuery, function (error) {
        if(error){
            console.log("Data inserting failed")
        }
        else {
            console.log("Data inserted")
        }

    })

}

function DeleteData(con){
    let DeleteQuery="DELETE FROM `students_list` WHERE 'id' = '2'";
    con.query(DeleteQuery, function (error) {
        if(error){
            console.log("Data was not deleted")
        }
        else {
            console.log("Data was successfully deleted")
        }

    })

}

function UpdateData(con) {
    let UpdateQuery="UPDATE `students_list` SET `std_phone_number`='1111111111',`std_city`='Sendai' WHERE 'id'='4'";
    con.query(UpdateQuery, function (error) {
        if(error){
            console.log("Data was not updated")
        }
        else {
            console.log("Data was successfully updated")
        }

    })

}

function SelectData(con) {
    let SelectQuery="SELECT * FROM `students_list` ";
    con.query(SelectQuery, function (error, result){
        if(error){
            console.log("Data dosent selected")
        }
        else {
            console.log(result)
        }
    })

}