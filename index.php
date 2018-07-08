<?php
class Conmysql{
    public $servername;
    public $username;
    public $password;
    public $dbname;
    public $con = '';
    public function __construct($servername,$username,$password,$dbname){
        $this->servername = $servername;
        $this->username = $username;
        $this->password = $password;
        $this->dbname = $dbname;
    }

    public function getConnection(){
        $this->con = mysqli_connect($this->servername, $this->username, $this->password,$this->dbname);
        if (!$this->con) {
            die("Connection failed: " . mysqli_connect_error());
        }
    }

    public function updateData($sql){
        if($this->con==null){
            $this->getConnection();
        }
        header("Content-type: text/html; charset=utf-8");
        // mysqli_select_db($this->con,$this->dbname);
        // $sql = "UPDATE praise SET num=num+1 WHERE id = 1";
        $res = mysqli_query($this->con,$sql);
        $arr = array('result'=>$res);
        echo json_encode($arr);
        $this->closeCon();
    }

    public function closeCon(){
        $this->con = null;
    }
}

class realCon extends Conmysql{
    public function __construct($servername,$username,$password,$dbname){
        parent::__construct($servername,$username,$password,$dbname);
    }
    public function updateReal(){
        $sql = "UPDATE praise SET num=num+1 WHERE id = 1";
        $this->updateData($sql);
    }
}
$instance = new realCon('localhost',"root","root","test");
$instance ->updateReal();
?>