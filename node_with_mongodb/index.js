var MongoClint=require('mongodb').MongoClient;
//var URL="mongodb+srv://kamrulhasan:Interest12@kamrul.jx41z.mongodb.net?retryWrites=true&w=majority";
var URL="mongodb+srv://kamrulhasan:Interest12@kamrul.jx41z.mongodb.net/school?retryWrites=true&w=majority";

MongoClient.connect(URL,function (error,MyMongoClient) {
    if(error){
        console.log("Connection failed")
    }
    else {
        console.log("Connection successfully.");
        InsertData(MyMongoClient);
        //DeleteOneItem(MyMongoClint);
        //DeleteAllItem(MyMongoClint);

        //FindOneWithoutCondition(MyMongoClint);
        //FindOneWithCondition(MyMongoClint);
        //FindAllData(MyMongoClint);
        //FindAllDataByProjection(MyMongoClint);
        //FindAllDataByQuery(MyMongoClint);
        //FindAllDataByByLimit(MyMongoClint);
        //FindAllDataByBySort(MyMongoClint);
        //UpdateMyData(MyMongoClient);
        //MyNewCollection(MyMongoClient);
    }

})

function InsertData(MyMongoClient){
    var MyDataBase= MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("students");

    var MyData={name:"Hasan",Roll:"04", class:"eight", city:"Sendai"};
    MyCollection.insertOne(MyData,function (error){
        if(error){
            console.log("Data Insert failed")
        }
        else {
            console.log("Data insert success")
        }
    })

}

function DeleteOneItem(MyMongoClient) {
    var MyDtaBase=MyMongoClient.db("school");
    var MyCollection=MyDtaBase.collection("students");

    var DeleteItem={city:"Sendai"}
    MyCollection.deleteOne(DeleteItem, function (error) {

        if(error){
            console.log("Data dosn't delete")

        }
        else {
            console.log("Data deleted successfully")
        }

        
    });

}

function DeleteAllItem(MyMongoClient) {
    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("students");

    MyCollection.deleteMany(function (error, ResultObj) {
        if(error){
            console.log("Delete failed");

        }
        else {
            console.log(ResultObj);

        }

    })

}

function FindOneWithoutCondition(MyMongoClient) {
    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("students");
    var FindObj={}
    MyCollection.findOne(FindObj, function (error,result) {
        console.log(result)
        
    })

}

function FindOneWithCondition(MyMongoClient) {
    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("students");
    var FindObj={Roll:"01"}
    MyCollection.findOne(FindObj, function (error,result) {
        console.log(result)

    })

}

function FindAllData(MyMongoClient) {
    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("students");

    MyCollection.find().toArray(function (error,result) {
        console.log(result)

    })

}

function FindAllDataByProjection(MyMongoClient) {
    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("students");

    var ItemObj={}
    var ItemProjection={projection:{city:" ",Roll:" "}}

    MyCollection.find(ItemObj, ItemProjection).toArray(function (error,result) {
        console.log(result)

    })

}

function FindAllDataByQuery(MyMongoClient) {
    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("students");

    var Query={Roll:"31", city:"Tokyo"}

    MyCollection.find(Query).toArray(function (error, result) {
        console.log(result)

    })

}

function FindAllDataByByLimit(MyMongoClient) {
    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("students");

    MyCollection.find().limit(5).toArray(function (error, result) {
        console.log(result)

    })

}


function FindAllDataByBySort(MyMongoClient) {
    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("students");

    //var SortPattern={Roll:1}
    //var SortPattern={Roll:-1}
    var SortPattern={class:1}

    MyCollection.find().sort(SortPattern).toArray(function (error, result) {
        console.log(result)

    })

}

function UpdateMyData(MyMongoClient) {
    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("students");

    var MyQuery={Roll:"04"};
    var MyNewValues={$set: {name:"Kamrul Hasan", city:"Dhaka", class:"Eleven"}}

    MyCollection.updateOne(MyQuery,MyNewValues, function (error,result) {
        console.log(result);

    })
}

function MyNewCollection(MyMongoClient) {
    var MyDataBase= MyMongoClient.db("school");
    MyDataBase.createCollection("teachers",function (error,result) {
        console.log(result);

    })

}