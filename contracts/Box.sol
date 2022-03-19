pragma solidity ^0.4.17;
pragma experimental ABIEncoderV2;

contract Box {

    struct Student {
        uint slNo;
        string name;
        uint rollNo;
        string dob;
        uint score;
        bool complete;
        address StudentAddress;
        uint amount;
        uint otp;
    }

    struct Depositer {
        uint amount;
        address depositerAddress;
    }

    Depositer[] public depositer;
    Student[] public students;

    address public manager;
    address[] public rechargeAddress;
    uint public scholarshipAmout;
    uint public minimumScore;
    uint public amount;
    
    function Scholarship() public {
        manager = msg.sender;
        
    }
    
   function enter() public payable {
       Depositer memory newDepositer = Depositer({
            amount:msg.value,
            depositerAddress:msg.sender
        });
       depositer.push(newDepositer);
    }

    function getListOfDepositors() public view returns (Depositer[]) {
        return depositer;
    }

    function registerStudent(string name, uint rollNo, uint score, string dob) public payable {
        require(score > 100);
        Student memory newStudent = Student({
            slNo:students.length,
            name:name,
            rollNo:rollNo,
            dob:dob,
            score:score,
            complete:false,
            StudentAddress:msg.sender,
            amount:1000000000000000000,
            otp:uint(keccak256(block.difficulty, now))
        });
        students.push(newStudent);
    }

    function getListOfStudents() public view returns (Student[]) {
        return students;
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
   
}   