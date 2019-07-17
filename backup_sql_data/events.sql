-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2019 at 03:44 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 5.6.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `events`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `user_id`, `event_id`, `comment`, `createdAt`, `updatedAt`) VALUES
(1, 3, 16, 'miss you guys..!', '2019-06-28 09:39:08', '2019-06-28 09:39:08'),
(2, 3, 18, 'tessting', '2019-07-06 23:18:41', '2019-07-06 23:18:41'),
(3, 10, 18, 'again', '2019-07-06 23:19:20', '2019-07-06 23:19:20'),
(4, 10, 2, 'wow', '2019-07-06 23:19:32', '2019-07-06 23:19:32'),
(5, 10, 16, 'nice buddy', '2019-07-07 09:17:57', '2019-07-07 09:17:57'),
(6, 1, 18, 'hh', '2019-07-07 23:37:17', '2019-07-07 23:37:17'),
(7, 1, 16, 'nice', '2019-07-08 00:15:11', '2019-07-08 00:15:11'),
(8, 1, 16, 'kokkk', '2019-07-08 00:15:19', '2019-07-08 00:15:19'),
(9, 1, 16, 'hmmmmmmmm', '2019-07-08 00:15:28', '2019-07-08 00:15:28'),
(10, 2, 1, 'wow', '2019-07-08 10:11:05', '2019-07-08 10:11:05'),
(11, 1, 1, 'hhhh', '2019-07-15 06:56:21', '2019-07-15 06:56:21'),
(12, 1, 1, 'Hello', '2019-07-15 07:14:22', '2019-07-15 07:14:22'),
(13, 1, 1, 'helllllllllllllll', '2019-07-15 07:15:24', '2019-07-15 07:15:24'),
(14, 1, 1, 'helo friend', '2019-07-15 07:21:51', '2019-07-15 07:21:51'),
(15, 1, 1, 'hellllllllllllllllllllllll', '2019-07-15 07:50:51', '2019-07-15 07:50:51'),
(16, 1, 2, 'this event is awesome..!!', '2019-07-15 09:38:43', '2019-07-15 09:38:43'),
(17, 1, 2, 'goooooooooo', '2019-07-15 09:39:24', '2019-07-15 09:39:24'),
(18, 1, 2, 'hhhh', '2019-07-15 09:39:39', '2019-07-15 09:39:39'),
(19, 1, 17, 'okkkk', '2019-07-15 09:41:54', '2019-07-15 09:41:54'),
(20, 1, 21, 'hello', '2019-07-15 11:59:01', '2019-07-15 11:59:01'),
(21, 2, 22, 'This event was awesome....! party saty late night', '2019-07-15 12:21:49', '2019-07-15 12:21:49'),
(22, 2, 21, 'when this fest takes place..? any idea..', '2019-07-15 12:23:03', '2019-07-15 12:23:03'),
(23, 4, 23, 'I had a good experience. It was amazing. I would recommend all the coders out there do participate and show case your talent, this is the good platform for everyone.', '2019-07-15 12:37:57', '2019-07-15 12:37:57'),
(24, 4, 22, 'hey.. me too had a fun. What a amazing party it was..!', '2019-07-15 12:39:30', '2019-07-15 12:39:30'),
(25, 1, 22, 'AMAZING night on Saturday, best nights music in years. You guys certainly get the foot tapping and people on the dance floor, what a change from the norm. Love to see you again.', '2019-07-15 13:22:51', '2019-07-15 13:22:51');

-- --------------------------------------------------------

--
-- Table structure for table `follows`
--

CREATE TABLE `follows` (
  `follow_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `follows`
--

INSERT INTO `follows` (`follow_id`, `user_id`, `receiver_id`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, 'accept', '2019-06-26 18:37:07', '2019-07-07 12:09:51'),
(2, 1, 4, 'accept', '2019-06-26 18:38:53', '2019-06-26 18:38:53'),
(3, 2, 9, 'accept', '2019-06-26 18:37:07', '2019-07-08 00:17:24'),
(4, 4, 1, 'accept', '2019-06-26 18:38:53', '2019-06-26 18:38:53'),
(5, 9, 2, 'requested', '2019-06-26 18:37:07', '2019-06-26 18:37:07'),
(6, 10, 1, 'accept', '2019-06-26 18:38:53', '2019-06-26 18:38:53'),
(7, 10, 3, 'accept', '2019-06-26 18:37:07', '2019-06-26 18:37:07'),
(8, 10, 2, 'requested', '2019-07-07 00:00:00', '2019-07-07 00:00:00'),
(9, 4, 10, 'requested', '2019-07-07 00:00:00', '2019-07-07 00:00:00'),
(10, 2, 1, 'accept', '2019-07-07 00:00:00', '2019-07-07 12:06:37'),
(11, 2, 3, 'requested', '2019-07-07 12:13:39', '2019-07-07 12:13:39'),
(12, 4, 2, 'accept', '2019-07-15 12:23:38', '2019-07-15 12:24:05'),
(13, 2, 4, 'accept', '2019-07-15 12:24:14', '2019-07-15 12:45:20');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `like_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `like_status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`like_id`, `user_id`, `event_id`, `like_status`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, 'liked', '2019-06-24 20:45:51', '2019-06-24 20:45:51'),
(2, 1, 1, 'liked', '2019-06-24 20:46:12', '2019-06-24 20:46:12'),
(3, 1, 4, 'liked', '2019-06-24 20:55:59', '2019-06-24 20:55:59'),
(4, 1, 3, 'liked', '2019-06-24 21:02:53', '2019-06-24 21:02:53'),
(5, 3, 18, 'liked', '2019-07-06 23:18:30', '2019-07-06 23:18:30'),
(6, 10, 18, 'liked', '2019-07-06 23:19:12', '2019-07-06 23:19:12'),
(7, 10, 2, 'liked', '2019-07-06 23:19:27', '2019-07-06 23:19:27'),
(8, 10, 4, 'liked', '2019-07-07 09:17:39', '2019-07-07 09:17:39'),
(9, 10, 16, 'liked', '2019-07-07 09:17:47', '2019-07-07 09:17:47'),
(10, 9, 20, 'liked', '2019-07-08 00:17:19', '2019-07-08 00:17:19'),
(11, 2, 1, 'liked', '2019-07-08 10:11:18', '2019-07-08 10:11:18'),
(12, 1, 17, 'liked', '2019-07-15 06:53:07', '2019-07-15 06:53:07'),
(13, 1, 16, 'liked', '2019-07-15 09:41:38', '2019-07-15 09:41:38'),
(14, 1, 18, 'liked', '2019-07-15 09:42:08', '2019-07-15 09:42:08'),
(15, 1, 21, 'liked', '2019-07-15 09:42:24', '2019-07-15 09:42:24'),
(16, 2, 22, 'liked', '2019-07-15 12:22:03', '2019-07-15 12:22:03'),
(17, 2, 21, 'liked', '2019-07-15 12:23:13', '2019-07-15 12:23:13'),
(18, 4, 23, 'liked', '2019-07-15 12:38:20', '2019-07-15 12:38:20'),
(19, 4, 22, 'liked', '2019-07-15 12:39:43', '2019-07-15 12:39:43'),
(20, 2, 24, 'liked', '2019-07-15 12:44:56', '2019-07-15 12:44:56'),
(21, 4, 24, 'liked', '2019-07-15 12:45:29', '2019-07-15 12:45:29'),
(22, 1, 24, 'liked', '2019-07-15 12:51:04', '2019-07-15 12:51:04');

-- --------------------------------------------------------

--
-- Table structure for table `login_details`
--

CREATE TABLE `login_details` (
  `login_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `last_activity` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_type` varchar(255) DEFAULT NULL,
  `offline_online_status` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login_details`
--

INSERT INTO `login_details` (`login_id`, `user_id`, `last_activity`, `is_type`, `offline_online_status`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2019-07-16 19:09:12', NULL, 'offline', '2019-07-14 19:09:44', '2019-07-16 13:39:12'),
(2, 2, '2019-07-15 18:14:59', NULL, 'offline', '2019-07-14 20:05:34', '2019-07-15 12:44:59'),
(3, 4, '2019-07-15 18:15:43', NULL, 'offline', '2019-07-14 20:06:08', '2019-07-15 12:45:43');

-- --------------------------------------------------------

--
-- Table structure for table `messageboxes`
--

CREATE TABLE `messageboxes` (
  `message_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `msg_receiver_id` int(11) NOT NULL,
  `message_content` varchar(255) NOT NULL,
  `status_seen_unseen` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messageboxes`
--

INSERT INTO `messageboxes` (`message_id`, `user_id`, `msg_receiver_id`, `message_content`, `status_seen_unseen`, `createdAt`, `updatedAt`) VALUES
(99, 9, 2, 'Hie Divu', '', '2019-07-08 01:11:24', '2019-07-08 01:11:24'),
(100, 9, 2, 'bye', '', '2019-07-08 01:13:31', '2019-07-08 01:13:31'),
(101, 9, 2, 'hmm..', '', '2019-07-08 01:15:03', '2019-07-08 01:15:03'),
(102, 9, 2, 'kkkkkkkk', '', '2019-07-08 01:16:13', '2019-07-08 01:16:13'),
(103, 1, 2, 'hie', '', '2019-07-08 01:30:27', '2019-07-08 01:30:27'),
(104, 1, 2, 'ssup?', '', '2019-07-08 01:33:35', '2019-07-08 01:33:35'),
(105, 1, 2, 'k', '', '2019-07-08 01:35:58', '2019-07-08 01:35:58'),
(106, 1, 2, 'hie divu\n', '', '2019-07-08 10:06:08', '2019-07-08 10:06:08'),
(107, 2, 1, 'hie sonu', '', '2019-07-08 10:06:16', '2019-07-08 10:06:16'),
(108, 1, 2, 'it\'s working...', '', '2019-07-08 10:06:38', '2019-07-08 10:06:38'),
(109, 2, 1, 'finalyyyyyyyyyyyyyy..', '', '2019-07-08 10:06:50', '2019-07-08 10:06:50'),
(110, 1, 2, 'wow..!', '', '2019-07-08 10:07:11', '2019-07-08 10:07:11'),
(111, 2, 1, 'hmmm..', '', '2019-07-08 10:07:22', '2019-07-08 10:07:22'),
(112, 1, 2, 'hie', '', '2019-07-08 10:09:53', '2019-07-08 10:09:53'),
(113, 2, 1, 'hey', '', '2019-07-08 10:10:04', '2019-07-08 10:10:04'),
(114, 2, 1, 'suup', '', '2019-07-08 10:10:19', '2019-07-08 10:10:19');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `event_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `e_imagepath` varchar(255) NOT NULL,
  `event_message` varchar(255) NOT NULL,
  `event_name` varchar(255) NOT NULL,
  `event_description` varchar(255) NOT NULL,
  `event_read_more_option` varchar(255) NOT NULL,
  `event_type` varchar(255) NOT NULL,
  `event_organization` varchar(255) NOT NULL,
  `event_country_name` varchar(255) NOT NULL,
  `event_state_name` varchar(255) NOT NULL,
  `event_sub_city_name` varchar(255) NOT NULL,
  `event_main_city_name` varchar(255) NOT NULL,
  `event_area_1_name` varchar(255) NOT NULL,
  `event_area_2_name` varchar(255) NOT NULL,
  `event_postal_code` varchar(255) NOT NULL,
  `event_full_address` varchar(255) NOT NULL,
  `event_latitude` varchar(255) NOT NULL,
  `event_logitude` varchar(255) NOT NULL,
  `event_start_date` date NOT NULL,
  `event_start_time` time NOT NULL,
  `event_start_am_or_pm` varchar(255) NOT NULL,
  `event_end_date` date NOT NULL,
  `event_end_time` time NOT NULL,
  `event_end_am_or_pm` varchar(255) NOT NULL,
  `event_registeration_date_close` date DEFAULT NULL,
  `event_registeration_time_close` time DEFAULT NULL,
  `event_registeration_am_or_pm_close` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`event_id`, `user_id`, `e_imagepath`, `event_message`, `event_name`, `event_description`, `event_read_more_option`, `event_type`, `event_organization`, `event_country_name`, `event_state_name`, `event_sub_city_name`, `event_main_city_name`, `event_area_1_name`, `event_area_2_name`, `event_postal_code`, `event_full_address`, `event_latitude`, `event_logitude`, `event_start_date`, `event_start_time`, `event_start_am_or_pm`, `event_end_date`, `event_end_time`, `event_end_am_or_pm`, `event_registeration_date_close`, `event_registeration_time_close`, `event_registeration_am_or_pm_close`, `createdAt`, `updatedAt`) VALUES
(21, 1, 'img_545929768f06808457075441092e2962_1519731735330_original.jpg', 'Musical Play', 'GLEE', 'School annual day...', 'Annual day was celebrated at St.Dominic Savio High School Andheri East', 'cultural', 'school', '\"India\"', '\"Maharashtra\"', '\"Thane\"', '\"Mira Bhayandar\"', '\"Mira Road\"', '\"Hatkesh Udhog Nagar\"', '\"401107\"', '\"60 Feet Rd, Phase ll, Hatkesh Udhog Nagar, Mira Road, Mira Bhayandar, Maharashtra 401107, India\"', '19.2832173', '72.88192679999997', '2019-07-15', '06:00:00', 'PM', '2019-07-16', '10:00:00', 'PM', '2019-07-14', '12:00:00', 'PM', '2019-07-14 19:59:24', '2019-07-14 19:59:24'),
(22, 2, '1563193219901.jpg', 'DJ NIGHT', 'Saturday Night', 'Dj Night is awesome PSD Template for Band, Pub, Club, Dance, Party Night, Portfolio, Photographer, Digital Studio, Disco, Jockey, Adult Content, Bands,Music, Video Gallery...', 'Dj Night PSD Template is very Modern and Clean Design built with Bootstrap Grid System. It is built on 12 Column grid (1170px) and Grouped 13 PSD files included and All layers are organized properly, and much more!', 'party', 'coporate', '\"Bangladesh\"', '\"Rangpur Division\"', '\"Rangpur District\"', '\"Kandi\"', 'NA', 'NA', 'NA', '\"Kandi, Bangladesh\"', '25.6058477', '89.46433339999999', '2019-07-20', '08:00:00', 'PM', '2019-07-20', '04:00:00', 'AM', '2019-07-19', '12:00:00', 'PM', '2019-07-15 12:20:19', '2019-07-15 12:20:19'),
(23, 4, '1563194092726.png', 'Mumbai Hackathon', 'Hackathon', 'Our college is organising a hackathon based on blockchain and social causes. Since blockchain is one of the trending technologies we would like students to participate in such even…', 'The flow of the event will be: 19th December: Hands-on Workshop (The hackathon participants will learn about Blockchain and understand various tools required in creating Blockchain based applicati.', 'hackathon', 'college', '\"India\"', '\"Maharashtra\"', '\"Mumbai Suburban\"', '\"Mumbai\"', '\"Kurla\"', '\"Nav Pada\"', '\"400070\"', '\"Premier Automobiles Road, Opp. HDIL Premier Exotica, Kurla (w), Amar Nagar, Nav Pada, Kurla, Mumbai, Maharashtra 400070, India\"', '19.0812532', '72.88859609999997', '2019-07-06', '10:00:00', 'AM', '2019-07-08', '10:00:00', 'AM', '2019-07-05', '12:00:00', 'PM', '2019-07-15 12:34:52', '2019-07-15 12:34:52'),
(24, 2, '1563194638297.jpg', 'Astronomy on Tapppp..', 'Astronomy', 'Each FREE event features accessible, engaging science presentations on topics ranging from planets to black holes to galaxies to the beginning of the Universe. Presenters are from local research and educational institutions. In NYC these include AMNH, Col', 'Astronomy on Tap was created in NYC by Meg Schwamb, now a Postdoctoral Fellow at the Institute of Astronomy & Astrophysics, Academia Sinica (Taiwan). NYC events are currently organized by Emily Rice, an astronomer and professor at the College of Staten Is', 'culture', 'college', '\"India\"', '\"Maharashtra\"', '\"Thane\"', '\"Thane\"', '\"Thane West\"', '\"Jambli Naka\"', '\"400601\"', '\"Datta Mandir Rd, Chendani, Juhu Chandan Society, Jambli Naka, Thane West, Thane, Maharashtra 400601, India\"', '19.1879931', '72.9778867', '2019-07-16', '06:00:00', 'PM', '2019-07-15', '13:00:00', 'AM', '2019-07-15', '12:00:00', 'PM', '2019-07-15 12:43:58', '2019-07-15 12:43:58'),
(25, 1, '1563195027448.jpg', '24 hrs coding Non-Strop', 'coding event', 'CodeChef is back with the next date for CodeChef Certification exam on DSA. The next exam will be held on 22nd September across 22+ cities of India. You can now start enrolling yourself. ....', 'Registrations for the next CodeChef Certification on DSA have now started. You can now enroll yourself at a super early bird discount price till 7th August and save ?1000/-.', 'coding', 'college', '\"India\"', '\"Maharashtra\"', '\"Mumbai Suburban\"', '\"Mumbai\"', '\"Bandra East\"', '\"Naupada\"', 'NA', '\"Bandra Terminus, Naupada, Bandra East, Mumbai, Maharashtra, India\"', '19.0635747', '72.84047029999999', '2019-07-26', '09:00:00', 'AM', '2019-07-16', '09:00:00', 'AM', '2019-07-25', '12:00:00', 'PM', '2019-07-15 12:50:27', '2019-07-15 12:50:27'),
(26, 1, '1563195697317.jpg', 'REMIX, DJ AND CREATION CONTESTS', 'trance dj', 'Are you looking for a remix contest? or creation/DJ contest? We list all our official contests. Participate now on Soonvibes!...', 'Sanchez began to play nightclubs in New York City, and later around the world. Along with fellow New York house DJs Erick Morillo, David Morales and Danny Tenaglia, Sanchez has become well known in the European club circuit, especially on the Spanish isla', 'trance', 'German techno', '\"Germany\"', '\"Hessen\"', '\"Darmstadt\"', '\"Neckarsteinach\"', 'NA', 'NA', '\"69239\"', '\"Neckargemünder Str. 9, 69239 Neckarsteinach, Germany\"', '49.4084659', '8.834348800000043', '2019-07-27', '06:00:00', 'PM', '2019-07-27', '12:00:00', 'PM', '2019-07-26', '12:00:00', 'PM', '2019-07-15 13:01:37', '2019-07-15 13:01:37'),
(27, 1, '1563212015804.jpg', 'Event Partner', 'Event Partner', 'Details Event Planning brings to you a team that is passionate about the arts, elegant surroundings and has a love for exquisite culinary experiences. The founders, Rupali and Mayuri, expertly curate each event with great precision, knowing, that no detai', 'Design is one of the most important aspects of our events; we pride ourselves in elegant design and ensure that your concept is perfectly captured. Our vast experience has provided us with an extensive portfolio, which grows with each passing event.', '', '', '\"India\"', '\"Maharashtra\"', '\"Mumbai Suburban\"', '\"Mumbai\"', '\"Ghatkopar West\"', '\"Amrut Nagar\"', '\"400086\"', '\"R City Mall, 3rd Floor, LBS Rd, Amrut Nagar, Ghatkopar West, Mumbai, Maharashtra 400086, India\"', '19.0997486', '72.91561739999997', '2019-07-31', '06:00:00', 'PM', '2019-07-31', '01:00:00', 'PM', '2019-07-30', '12:00:00', 'PM', '2019-07-15 17:33:35', '2019-07-15 17:33:35'),
(28, 1, '1563212246959.jpg', 'Beta Show Room Event', 'Beta Show room', 'BETA International features a packed programme of events across three busy days. We’ve got seminars, presentations, demonstrations, displays, awards – and a fabulous Fashion Show. Each one is designed to inspire and inform you, help grow your business and', 'New for 2020, the Demonstration Arena in Hall 8 is home to an exciting array of displays and demos from the worlds of equine and canine. We’ve got everything from working dog displays with the UK’s top trainer, Ricky Moloney, to saddle fitting teach-ins w', 'cultural', 'college', '\"India\"', '\"Maharashtra\"', '\"Mumbai Suburban\"', '\"Mumbai\"', '\"Andheri East\"', '\"Railway Colony\"', '\"400058\"', '\"Railway Colony, Andheri East, Railway Colony, Andheri East, Mumbai, Maharashtra 400058, India\"', '19.1180813', '72.84598860000006', '2019-07-29', '06:00:00', 'PM', '2019-07-30', '04:00:00', 'PM', '2019-07-29', '08:00:00', 'PM', '2019-07-15 17:37:27', '2019-07-15 17:37:27'),
(29, 1, '1563212246973.jpg', 'Beta Show Room Event', 'Beta Show room', 'BETA International features a packed programme of events across three busy days. We’ve got seminars, presentations, demonstrations, displays, awards – and a fabulous Fashion Show. Each one is designed to inspire and inform you, help grow your business and', 'New for 2020, the Demonstration Arena in Hall 8 is home to an exciting array of displays and demos from the worlds of equine and canine. We’ve got everything from working dog displays with the UK’s top trainer, Ricky Moloney, to saddle fitting teach-ins w', 'cultural', 'college', '\"India\"', '\"Maharashtra\"', '\"Mumbai Suburban\"', '\"Mumbai\"', '\"Andheri East\"', '\"Railway Colony\"', '\"400058\"', '\"Railway Colony, Andheri East, Railway Colony, Andheri East, Mumbai, Maharashtra 400058, India\"', '19.1180813', '72.84598860000006', '2019-07-29', '06:00:00', 'PM', '2019-07-30', '04:00:00', 'PM', '2019-07-29', '08:00:00', 'PM', '2019-07-15 17:37:27', '2019-07-15 17:37:27'),
(30, 1, '1563212501004.jpg', 'Coding Competition hurry up..!', 'Code Jam', 'Google Code Jam is an international programming competition hosted and administered by Google. The competition began in 2003 as a means to identify top engineering talent for potential employment at Google. The competition consists of a set of algorithmic', 'On this page, you can see results and code from past rounds of Code Jam (from 2008 to 2017) and related spin-offs. Best of all, you can try the problems yourself! We encourage you to explore the scoreboards, read through the problem sets, and practice!', 'coding', 'google', '\"India\"', '\"Maharashtra\"', '\"Mumbai Suburban\"', '\"Mumbai\"', '\"Ghatkopar East\"', '\"Sindhu Wadi\"', '\"400077\"', '\"Ghatkopar, Adoni Compound, Sindhu Wadi, Ghatkopar East, Mumbai, Maharashtra 400077, India\"', '19.0923481', '72.91373410000006', '2019-07-28', '10:00:00', 'AM', '2019-07-29', '10:00:00', 'AM', '2019-07-27', '10:00:00', 'PM', '2019-07-15 17:41:41', '2019-07-15 17:41:41'),
(31, 1, '1563213233698.jpg', 'Rock & Roll', 'RockON', 'Rock and roll, also called rock \'n\' roll or rock & roll, style of popular music that originated in the United States in the mid-1950s and that evolved by the mid-1960s into the more encompassing international style known as rock music, though the latter a', 'ock and roll is a genre of popular music that originated and evolved in the United States ...... Tools. What links here · Related changes · Upload file · Special pages · Permanent link · Page information · Wikidata item', 'rock', 'college', '\"India\"', '\"Maharashtra\"', '\"Mumbai Suburban\"', '\"Mumbai\"', '\"Vikhroli West\"', '\"Hanuman Nagar\"', '\"400086\"', '\"Amrut Nagar Rd, Ram Nagar, Hanuman Nagar, Vikhroli West, Mumbai, Maharashtra 400086, India\"', '19.0999776', '72.91420889999995', '2019-07-25', '10:00:00', 'AM', '2019-07-26', '10:00:00', 'PM', '2019-07-23', '10:00:00', 'PM', '2019-07-15 17:53:53', '2019-07-15 17:53:53');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_firstname` varchar(255) NOT NULL,
  `user_lastname` varchar(255) NOT NULL,
  `user_dob` date NOT NULL,
  `user_gender` varchar(255) NOT NULL,
  `user_mobile_no` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_username` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_profile_pic` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_firstname`, `user_lastname`, `user_dob`, `user_gender`, `user_mobile_no`, `user_email`, `user_username`, `user_password`, `user_profile_pic`, `createdAt`, `updatedAt`) VALUES
(1, 'Sonu', 'Shahuji', '2010-11-18', 'male', '9999999999', 'sonushahuji4', 'sonu', '1234', '1561448515801.jpg', '2019-06-12 14:07:10', '2019-06-25 07:41:55'),
(2, 'Divya', 'Rile', '1991-11-15', 'female', '7777878787', 'divyarile', 'divya', '1234', '1561557057322.jpeg', '2019-06-12 14:25:05', '2019-06-26 13:50:57'),
(3, 'Shamim', 'Shaik', '1989-07-13', 'female', '56789879', 'shamimshaik', 'shamim', '1234', '1561557211311.jpg', '2019-06-12 14:25:54', '2019-06-26 13:53:31'),
(4, 'David', 'Wasawa', '1998-05-13', 'male', '8989897678', 'davidwasawa', 'david', '1234', 'david.jpg', '2019-06-12 14:26:48', '2019-06-26 11:15:16'),
(9, 'Franky', 'Martin', '2017-12-08', 'male', '9999876587', 'franky@gmail.com', 'franky', '1234', '1561557351231.jpg', '2019-06-23 10:24:44', '2019-06-26 13:55:51'),
(10, 'Lloyd', 'D\'souza', '1998-06-18', 'male', '7876534565', 'lloyd@gmail.com', 'lloyd', '1234', '1561557388506.jpg', '2019-06-23 10:26:39', '2019-06-26 13:56:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `event_id` (`event_id`);

--
-- Indexes for table `follows`
--
ALTER TABLE `follows`
  ADD PRIMARY KEY (`follow_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `follows_ibfk_2` (`receiver_id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`like_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `event_id` (`event_id`);

--
-- Indexes for table `login_details`
--
ALTER TABLE `login_details`
  ADD PRIMARY KEY (`login_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `messageboxes`
--
ALTER TABLE `messageboxes`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `messageboxes_ibfk_2` (`msg_receiver_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`event_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_mobile_no` (`user_mobile_no`),
  ADD UNIQUE KEY `user_email` (`user_email`),
  ADD UNIQUE KEY `user_username` (`user_username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `follows`
--
ALTER TABLE `follows`
  MODIFY `follow_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `like_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `login_details`
--
ALTER TABLE `login_details`
  MODIFY `login_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `messageboxes`
--
ALTER TABLE `messageboxes`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `posts` (`event_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `follows`
--
ALTER TABLE `follows`
  ADD CONSTRAINT `follows_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `follows_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `posts` (`event_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `login_details`
--
ALTER TABLE `login_details`
  ADD CONSTRAINT `login_details_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `messageboxes`
--
ALTER TABLE `messageboxes`
  ADD CONSTRAINT `messageboxes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `messageboxes_ibfk_2` FOREIGN KEY (`msg_receiver_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
