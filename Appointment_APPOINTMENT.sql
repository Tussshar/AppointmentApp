-- MySQL dump 10.13  Distrib 5.7.9, for osx10.9 (x86_64)
--
-- Host: 127.0.0.1    Database: Appointment
-- ------------------------------------------------------
-- Server version	5.7.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `APPOINTMENT`
--

DROP TABLE IF EXISTS `APPOINTMENT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `APPOINTMENT` (
  `appointmentId` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(255) NOT NULL,
  `notes` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `doctorEmailAddress` varchar(255) DEFAULT NULL,
  `patientEmailAddress` varchar(255) DEFAULT NULL,
  `timeSlotId` int(11) DEFAULT NULL,
  PRIMARY KEY (`appointmentId`),
  KEY `FK_3odyias2yihghqnv57ornur1c` (`timeSlotId`),
  KEY `FK_r6pq7vr0277yqid43vl04xosk` (`doctorEmailAddress`),
  KEY `FK_tjwn6wpm8iysbf8d4p6jw5gkn_idx` (`patientEmailAddress`),
  CONSTRAINT `FK_3odyias2yihghqnv57ornur1c` FOREIGN KEY (`timeSlotId`) REFERENCES `TIME_SLOT` (`timeSlotId`),
  CONSTRAINT `FK_r6pq7vr0277yqid43vl04xosk` FOREIGN KEY (`doctorEmailAddress`) REFERENCES `DOCTOR` (`doctorEmailAddress`),
  CONSTRAINT `FK_tjwn6wpm8iysbf8d4p6jw5gkn` FOREIGN KEY (`patientEmailAddress`) REFERENCES `PATIENT` (`patientEmailAddress`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `APPOINTMENT`
--

LOCK TABLES `APPOINTMENT` WRITE;
/*!40000 ALTER TABLE `APPOINTMENT` DISABLE KEYS */;
INSERT INTO `APPOINTMENT` VALUES (2,'12/22/2016','Test Notes','Test','tusharkale52@gmail.com','sanjay@gmail.com',1),(8,'12/27/2016','Test 7','Test 7','nitin@gmail.com','kunal@gmail.com',1),(10,'12/27/2016','test 9','test 9','sumit@gmail.com','rohil@gmail.com',6),(12,'12/29/2016','Test 10','Test 10','vineet@gmail.com','sanjay@gmail.com',3);
/*!40000 ALTER TABLE `APPOINTMENT` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-12-23 13:37:50
