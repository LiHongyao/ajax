-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: localhost    Database: db_test
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `heros`
--

DROP TABLE IF EXISTS `heros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `heros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL DEFAULT '未知',
  `skill` varchar(45) NOT NULL DEFAULT '未知',
  `gender` varchar(45) NOT NULL DEFAULT '保密',
  `position` varchar(45) NOT NULL DEFAULT '未知',
  `location` varchar(45) NOT NULL DEFAULT '未知',
  `last_use_date` date NOT NULL DEFAULT '2019-10-01',
  `proficiency` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `heros`
--

LOCK TABLES `heros` WRITE;
/*!40000 ALTER TABLE `heros` DISABLE KEYS */;
INSERT INTO `heros` VALUES (2,'狄仁杰','王朝密令','男','射手','下路','2019-07-16',1200),(3,'张良','言灵·操纵','男','法师','中路','2019-07-22',2669),(4,'露娜','新月突击','女','战士/法师','中路/野区','2018-12-30',2241),(5,'上官婉儿','章草·横鳞','女','法师/刺客','中路','2019-08-12',1876),(6,'李白','青莲剑歌','男','刺客','野区','2019-03-22',1430),(7,'甄姬','洛神降临','女','法师','中路','2019-05-28',1145),(8,'周瑜','烽火赤壁','男','法师','野区','2019-04-12',1002),(9,'吕布','魔神降世','男','战士','上路','2019-06-07',1398),(12,'貂蝉','绽·芳华','保密','未知','未知','2019-10-01',0),(13,'耀哥','开车','保密','未知','未知','2019-10-01',0),(14,'耀哥','开车','保密','未知','未知','2019-10-01',0);
/*!40000 ALTER TABLE `heros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phone`
--

DROP TABLE IF EXISTS `phone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `phone` (
  `imgUrl` varchar(200) NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `desc` varchar(45) DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  `originPrice` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`imgUrl`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phone`
--

LOCK TABLES `phone` WRITE;
/*!40000 ALTER TABLE `phone` DISABLE KEYS */;
INSERT INTO `phone` VALUES ('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg?thumb=1&w=200&h=200&f=webp&q=90','Redmi Note 7 ','4800万拍照千元机','1199','1399'),('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/411d540271f6efbdd882fa33daee0de3.jpg','小米MIX 3 8GB+128GB','DxO百分拍照手机','2599','3599'),('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a29e913ad0ea4e06725b6a45c6c6822.jpg','小米CC9','3200万自拍，4800万三摄','1799',NULL),('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/80e162c89662636b1e06402ede5bf530.jpg','小米CC9e','3200万自拍，4800万三摄','1200',''),('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/98b6d5e894ffed368c8bd316358702d5.jpg','小米CC9 8GB+256GB 美图定制版','8GB+256GB，100%美图相机','2599',NULL),('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a7f616f2e931d6433f36fb356693c3d1.jpg?thumb=1&w=200&h=200&f=webp&q=90','小米9 王源限量版','骁龙855，索尼4800万三摄','3599',''),('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg?thumb=1&w=200&h=200&f=webp&q=90','Redmi K20 Pro 6GB+128GB                      ','骁龙855， 弹出全面屏','2299','2599'),('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4f077546060c890516500c2a23d64f6.jpg','Redmi Note 7 Pro','索尼4800万超清拍照 ','1399','1599');
/*!40000 ALTER TABLE `phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `nikename` varchar(45) DEFAULT NULL,
  `tel` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('gouym','123','玉梅儿','19900001314','四川省广元市苍溪县','gouym_online@163.com'),('lihy','123','木子李','15228885771','四川省成都市高新区','lihy_online@163.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-21 17:38:33
