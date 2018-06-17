<?php


header("Access-Control-Allow-Origin: *");
$hostname = '';
$dbname = '';
$username = '' ;
$password = '';
$value = $_GET['id'];


if(isset($_GET[api_key])){
    $APIkey = $_GET[api_key];
}
else{
    header("HTTP/1.1 401 Unauthorized");
    return;
}

// = $_GET[‘api_key’];

try{
    $conn = new PDO("mysql:host=$hostname;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if($APIkey == 'banana'){
        $query = "SELECT * FROM week5";
        if($value){
            $query .= " where id =" . $value;
        }
        $content = $conn->query($query)->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($content);
    }
    else{
        header("HTTP/1.1 401 Unauthorized");
    }
 

}
catch(PDOException $e){
    die(print_r($e));
}



// obsolete
//    $results = $conn->query("SELECT * FROM week5")->fetchAll();
//    var_dump($result);