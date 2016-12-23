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
-- Table structure for table `TIME_SLOT`
--

DROP TABLE IF EXISTS `TIME_SLOT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TIME_SLOT` (
  `timeSlotId` int(11) NOT NULL AUTO_INCREMENT,
  `time` varchar(255) NOT NULL,
  PRIMARY KEY (`timeSlotId`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TIME_SLOT`
--

LOCK TABLES `TIME_SLOT` WRITE;
/*!40000 ALTER TABLE `TIME_SLOT` DISABLE KEYS */;
INSERT INTO `TIME_SLOT` VALUES (1,'09:00 - 10:00'),(2,'10:00 - 11:00'),(3,'11:00 - 12:00'),(4,'13:00 - 14:00'),(5,'14:00 - 15:00'),(6,'15:00 - 16:00'),(7,'16:00 - 17:00'),(8,'17:00 - 18:00'),(9,'09:00 - 10:00'),(10,'10:00 - 11:00'),(11,'11:00 - 12:00'),(12,'13:00 - 14:00'),(13,'14:00 - 15:00'),(14,'15:00 - 16:00'),(15,'16:00 - 17:00'),(16,'17:00 - 18:00');
/*!40000 ALTER TABLE `TIME_SLOT` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-12-23 13:37:51
