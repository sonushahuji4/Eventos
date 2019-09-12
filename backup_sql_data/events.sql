-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2019 at 08:38 AM
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
(20, 1, 21, 'hello', '2019-07-15 11:59:01', '2019-07-15 11:59:01'),
(21, 2, 22, 'This event was awesome....! party saty late night', '2019-07-15 12:21:49', '2019-07-15 12:21:49'),
(22, 2, 21, 'when this fest takes place..? any idea..', '2019-07-15 12:23:03', '2019-07-15 12:23:03'),
(23, 4, 23, 'I had a good experience. It was amazing. I would recommend all the coders out there do participate and show case your talent, this is the good platform for everyone.', '2019-07-15 12:37:57', '2019-07-15 12:37:57'),
(24, 4, 22, 'hey.. me too had a fun. What a amazing party it was..!', '2019-07-15 12:39:30', '2019-07-15 12:39:30'),
(25, 1, 22, 'AMAZING night on Saturday, best nights music in years. You guys certainly get the foot tapping and people on the dance floor, what a change from the norm. Love to see you again.', '2019-07-15 13:22:51', '2019-07-15 13:22:51'),
(26, 9, 32, 'Searching for our nation\'s very first Miss Fashion Week. Rewards include $5000 cash, professional photoshoots, and appearances at New York Fashion Week fashion shows. Do you have the desire and the confidence? http://missfw.com/ We offer you the opportuni', '2019-07-20 16:17:24', '2019-07-20 16:17:24'),
(27, 9, 23, 'Hackathons give you rare access to individuals with years of experience across many different fields and areas.', '2019-07-20 16:26:58', '2019-07-20 16:26:58'),
(28, 1, 23, 'Hi! I\'m Part of Hack Partners and we are going to be hosting a hackathon very very soon and would love to get promoted on your page. I was wondering if you can help us do this?', '2019-07-21 19:20:43', '2019-07-21 19:20:43'),
(29, 4, 34, 'One minute you look up at the room timer and have 54 minutes to go. You’re feeling confident, calm, collected, and then you glance back at the timer and, behold, you only have 12 minutes left. The adrenaline rush is like no other. It’s incredible how fast', '2019-07-23 07:30:18', '2019-07-23 07:30:18'),
(30, 2, 35, 'One minute you look up at the room timer and have 54 minutes to go. You’re feeling confident, calm, collected, and then you glance back at the timer and, behold, you only have 12 minutes left. The adrenaline rush is like no other. It’s incredible how fast', '2019-07-23 07:35:36', '2019-07-23 07:35:36'),
(31, 2, 34, 'Escape room games are the perfect way to test your wits in a race against time. The concept is simple and the brain teasers are thrilling. What is especially intriguing is that each room has a theme, whether from a popular movie or book. This is even bett', '2019-07-23 07:36:03', '2019-07-23 07:36:03'),
(32, 1, 35, 'Escape Rooms provides us with golden opportunity to stay connected and entangled with our dear ones along with fun activity games to indulge in.', '2019-07-23 07:36:55', '2019-07-23 07:36:55'),
(33, 1, 34, 'Thanks for sharing, David! So true.', '2019-07-23 07:37:47', '2019-07-23 07:37:47'),
(34, 1, 35, 'Looking forward to see more events like this..!', '2019-07-23 15:47:31', '2019-07-23 15:47:31'),
(35, 10, 27, 'And if one fails to conquer that particular event; they know they were close, and next time they pounce they will be sharp as a knife and you won’t even see it coming.', '2019-07-27 20:00:43', '2019-07-27 20:00:43'),
(36, 10, 27, 'And if one fails to conquer that particular event; they know they were close, and next time they pounce they will be sharp as a knife and you won’t even see it coming.', '2019-07-27 20:00:43', '2019-07-27 20:00:43'),
(37, 10, 29, 'It was a spectacular performance, amazing artists.', '2019-07-27 20:26:19', '2019-07-27 20:26:19'),
(38, 10, 31, 'Just want to tell you what a great show your band put on at the Wallace Bowl!!!  We had such a great time listening to your music..', '2019-07-27 20:26:52', '2019-07-27 20:26:52'),
(39, 2, 26, 'I had so much fun! We all loved all the songs - but I was particularly impressed with your drum solo - that was awesome!\"...a.nonomus', '2019-07-27 20:29:04', '2019-07-27 20:29:04'),
(40, 1, 28, 'testing comment', '2019-07-30 21:01:56', '2019-07-30 21:01:56'),
(41, 1, 26, 'testing comments 2', '2019-07-30 21:02:53', '2019-07-30 21:02:53'),
(42, 1, 22, 'awesome', '2019-08-01 06:29:29', '2019-08-01 06:29:29'),
(43, 1, 21, 'hello', '2019-08-21 17:07:42', '2019-08-21 17:07:42');

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
(5, 9, 2, 'accept', '2019-06-26 18:37:07', '2019-07-27 19:16:39'),
(6, 10, 1, 'accept', '2019-06-26 18:38:53', '2019-06-26 18:38:53'),
(7, 10, 3, 'accept', '2019-06-26 18:37:07', '2019-06-26 18:37:07'),
(8, 10, 2, 'accept', '2019-07-07 00:00:00', '2019-07-27 20:27:58'),
(10, 2, 1, 'accept', '2019-07-07 00:00:00', '2019-07-07 12:06:37'),
(12, 4, 2, 'accept', '2019-07-15 12:23:38', '2019-07-15 12:24:05'),
(13, 2, 4, 'accept', '2019-07-15 12:24:14', '2019-07-15 12:45:20'),
(14, 9, 4, 'accept', '2019-07-20 16:22:13', '2019-07-20 16:22:49'),
(16, 4, 3, 'requested', '2019-07-27 19:14:05', '2019-07-27 19:14:05'),
(22, 2, 3, 'accept', '2019-07-27 19:16:45', '2019-08-04 16:21:33'),
(26, 1, 3, 'requested', '2019-07-27 19:41:54', '2019-07-27 19:41:54'),
(27, 1, 9, 'requested', '2019-07-27 19:42:24', '2019-07-27 19:42:24'),
(29, 9, 10, 'accept', '2019-07-27 19:46:19', '2019-07-27 19:47:00'),
(30, 10, 1, 'requested', '2019-07-27 19:47:18', '2019-07-27 19:47:18'),
(32, 9, 4, 'requested', '2019-08-03 18:25:06', '2019-08-03 18:25:06'),
(33, 1, 3, 'requested', '2019-09-06 06:27:55', '2019-09-06 06:27:55');

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
(15, 1, 21, 'liked', '2019-07-15 09:42:24', '2019-07-15 09:42:24'),
(16, 2, 22, 'liked', '2019-07-15 12:22:03', '2019-07-15 12:22:03'),
(17, 2, 21, 'liked', '2019-07-15 12:23:13', '2019-07-15 12:23:13'),
(18, 4, 23, 'liked', '2019-07-15 12:38:20', '2019-07-15 12:38:20'),
(19, 4, 22, 'liked', '2019-07-15 12:39:43', '2019-07-15 12:39:43'),
(20, 2, 24, 'liked', '2019-07-15 12:44:56', '2019-07-15 12:44:56'),
(21, 4, 24, 'liked', '2019-07-15 12:45:29', '2019-07-15 12:45:29'),
(22, 1, 24, 'liked', '2019-07-15 12:51:04', '2019-07-15 12:51:04'),
(23, 9, 23, 'liked', '2019-07-20 16:25:42', '2019-07-20 16:25:42'),
(24, 9, 32, 'liked', '2019-07-20 16:28:27', '2019-07-20 16:28:27'),
(25, 1, 23, 'liked', '2019-07-21 19:22:14', '2019-07-21 19:22:14'),
(26, 1, 25, 'liked', '2019-07-21 19:22:31', '2019-07-21 19:22:31'),
(27, 1, 26, 'liked', '2019-07-21 19:22:35', '2019-07-21 19:22:35'),
(28, 1, 27, 'liked', '2019-07-21 19:22:46', '2019-07-21 19:22:46'),
(29, 1, 33, 'liked', '2019-07-22 13:03:39', '2019-07-22 13:03:39'),
(30, 1, 22, 'liked', '2019-07-22 14:44:18', '2019-07-22 14:44:18'),
(31, 1, 30, 'liked', '2019-07-22 14:51:02', '2019-07-22 14:51:02'),
(32, 1, 28, 'liked', '2019-07-22 15:01:09', '2019-07-22 15:01:09'),
(33, 2, 29, 'liked', '2019-07-22 18:42:05', '2019-07-22 18:42:05'),
(34, 2, 27, 'liked', '2019-07-22 18:42:33', '2019-07-22 18:42:33'),
(35, 2, 32, 'liked', '2019-07-22 18:42:51', '2019-07-22 18:42:51'),
(36, 2, 30, 'liked', '2019-07-22 18:43:01', '2019-07-22 18:43:01'),
(37, 2, 33, 'liked', '2019-07-22 18:43:49', '2019-07-22 18:43:49'),
(38, 2, 23, 'liked', '2019-07-22 18:44:01', '2019-07-22 18:44:01'),
(39, 4, 34, 'liked', '2019-07-23 07:29:02', '2019-07-23 07:29:02'),
(40, 2, 35, 'liked', '2019-07-23 07:35:43', '2019-07-23 07:35:43'),
(41, 2, 34, 'liked', '2019-07-23 07:35:48', '2019-07-23 07:35:48'),
(42, 1, 35, 'liked', '2019-07-23 07:36:36', '2019-07-23 07:36:36'),
(43, 1, 34, 'liked', '2019-07-23 07:37:22', '2019-07-23 07:37:22'),
(44, 3, 31, 'liked', '2019-07-27 19:25:00', '2019-07-27 19:25:00'),
(45, 1, 29, 'liked', '2019-07-27 19:52:00', '2019-07-27 19:52:00'),
(46, 10, 21, 'liked', '2019-07-27 19:52:35', '2019-07-27 19:52:35'),
(47, 10, 21, 'liked', '2019-07-27 19:52:35', '2019-07-27 19:52:35'),
(48, 10, 25, 'liked', '2019-07-27 19:52:41', '2019-07-27 19:52:41'),
(49, 10, 25, 'liked', '2019-07-27 19:52:41', '2019-07-27 19:52:41'),
(50, 10, 26, 'liked', '2019-07-27 19:53:02', '2019-07-27 19:53:02'),
(51, 10, 26, 'liked', '2019-07-27 19:53:03', '2019-07-27 19:53:03'),
(52, 10, 27, 'liked', '2019-07-27 19:53:13', '2019-07-27 19:53:13'),
(53, 10, 27, 'liked', '2019-07-27 19:53:13', '2019-07-27 19:53:13'),
(54, 10, 29, 'liked', '2019-07-27 20:25:28', '2019-07-27 20:25:28'),
(55, 1, 31, 'liked', '2019-07-30 05:48:47', '2019-07-30 05:48:47'),
(56, 1, 37, 'liked', '2019-07-30 13:08:14', '2019-07-30 13:08:14'),
(57, 1, 36, 'liked', '2019-07-30 13:08:26', '2019-07-30 13:08:26'),
(58, 1, 42, 'liked', '2019-09-06 06:25:24', '2019-09-06 06:25:24');

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
  `latitude` varchar(255) DEFAULT NULL,
  `longitide` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login_details`
--

INSERT INTO `login_details` (`login_id`, `user_id`, `last_activity`, `is_type`, `offline_online_status`, `latitude`, `longitide`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2019-09-08 11:34:56', NULL, 'online', NULL, NULL, '2019-07-14 19:09:44', '2019-09-08 06:04:56'),
(2, 2, '2019-08-24 12:50:58', NULL, 'offline', NULL, NULL, '2019-07-14 20:05:34', '2019-08-24 07:20:58'),
(3, 4, '2019-08-10 23:16:38', NULL, 'offline', NULL, NULL, '2019-07-14 20:06:08', '2019-08-10 17:46:38'),
(4, 9, '2019-08-03 23:56:18', NULL, 'offline', NULL, NULL, '2019-07-20 15:55:02', '2019-08-03 18:26:18'),
(5, 3, '2019-08-04 21:59:57', NULL, 'offline', NULL, NULL, '2019-07-27 19:18:29', '2019-08-04 16:29:57'),
(6, 10, '2019-07-28 01:57:21', NULL, 'offline', NULL, NULL, '2019-07-27 19:46:32', '2019-07-27 20:27:21');

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
(115, 9, 4, 'hie', 'seen', '2019-07-20 16:37:04', '2019-07-20 16:37:04'),
(116, 2, 1, 'hie', 'seen', '2019-07-22 00:00:00', '2019-07-22 16:45:06'),
(117, 2, 4, 'hgf', 'seen', '2019-07-27 21:10:41', '2019-07-27 21:10:41'),
(118, 1, 2, 'testing', 'seen', '2019-07-28 00:00:00', '2019-07-28 07:26:43'),
(119, 2, 1, 'testing again', 'seen', '2019-07-28 00:00:00', '2019-07-28 07:06:30'),
(120, 1, 2, 'testing', 'seen', '2019-07-28 00:00:00', '2019-07-28 07:26:43'),
(121, 2, 1, 'testing again', 'seen', '2019-07-28 00:00:00', '2019-07-28 07:06:30'),
(122, 4, 1, 'Hie sonu are you there..?', 'seen', '2019-08-03 18:23:44', '2019-08-03 18:23:44'),
(123, 9, 4, 'ssup david', 'seen', '2019-08-03 18:24:11', '2019-08-03 18:24:11'),
(124, 1, 4, 'ya say', 'seen', '2019-08-03 18:26:57', '2019-08-03 18:26:57'),
(125, 4, 1, 'testing', 'seen', '2019-08-04 00:00:00', '2019-08-03 18:43:56'),
(126, 4, 1, 'hie', 'seen', '2019-08-03 18:33:59', '2019-08-03 18:33:59'),
(127, 4, 1, 'hie', 'seen', '2019-08-03 18:39:27', '2019-08-03 18:39:27'),
(128, 1, 4, 'testing 2', 'seen', '2019-08-03 18:44:04', '2019-08-03 18:44:04'),
(129, 1, 2, 'hie testing', 'seen', '2019-08-04 15:58:38', '2019-08-04 16:00:07'),
(130, 1, 2, 'testing 2', 'seen', '2019-08-04 15:59:10', '2019-08-04 16:00:07'),
(131, 2, 1, 'testing', 'seen', '2019-08-04 16:00:51', '2019-08-04 16:01:29'),
(132, 1, 2, 'hie', 'seen', '2019-08-04 16:01:50', '2019-08-04 16:02:13'),
(133, 1, 2, 'hie', 'seen', '2019-08-21 17:10:23', '2019-08-21 17:10:31'),
(134, 2, 1, 'hello sonu', 'seen', '2019-08-21 17:10:39', '2019-09-06 06:26:53'),
(135, 1, 2, 'dsfhidsf', 'unseen', '2019-09-06 06:26:57', '2019-09-06 06:26:57');

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
(21, 1, 'bigboysfest.jpg', 'Musical Play', 'GLEE', 'School annual day...', 'Annual day was celebrated at St.Dominic Savio High School Andheri East', 'cultural', 'school', '\"India\"', '\"Maharashtra\"', '\"Thane\"', '\"Mira Bhayandar\"', '\"Mira Road\"', '\"Hatkesh Udhog Nagar\"', '\"401107\"', '\"60 Feet Rd, Phase ll, Hatkesh Udhog Nagar, Mira Road, Mira Bhayandar, Maharashtra 401107, India\"', '19.2832173', '72.88192679999997', '2019-04-15', '06:00:00', 'PM', '2019-07-16', '10:00:00', 'PM', '2019-07-14', '12:00:00', 'PM', '2019-07-14 19:59:24', '2019-07-14 19:59:24'),
(22, 2, '1563193219901.jpg', 'DJ NIGHT', 'Saturday Night', 'Dj Night is awesome PSD Template for Band, Pub, Club, Dance, Party Night, Portfolio, Photographer, Digital Studio, Disco, Jockey, Adult Content, Bands,Music, Video Gallery...', 'Dj Night PSD Template is very Modern and Clean Design built with Bootstrap Grid System. It is built on 12 Column grid (1170px) and Grouped 13 PSD files included and All layers are organized properly, and much more!', 'party', 'coporate', '\"Bangladesh\"', '\"Rangpur Division\"', '\"Rangpur District\"', '\"Kandi\"', 'NA', 'NA', 'NA', '\"Kandi, Bangladesh\"', '25.6058477', '89.46433339999999', '2019-07-20', '08:00:00', 'PM', '2019-07-20', '04:00:00', 'AM', '2019-07-19', '12:00:00', 'PM', '2019-07-15 12:20:19', '2019-07-15 12:20:19'),
(23, 4, '1563194092726.png', 'Mumbai Hackathon', 'Hackathon', 'Our college is organising a hackathon based on blockchain and social causes. Since blockchain is one of the trending technologies we would like students to participate in such even…', 'The flow of the event will be: 19th December: Hands-on Workshop (The hackathon participants will learn about Blockchain and understand various tools required in creating Blockchain based applicati.', 'hackathon', 'college', '\"India\"', '\"Maharashtra\"', '\"Mumbai Suburban\"', '\"Mumbai\"', '\"Kurla\"', '\"Nav Pada\"', '\"400070\"', '\"Premier Automobiles Road, Opp. HDIL Premier Exotica, Kurla (w), Amar Nagar, Nav Pada, Kurla, Mumbai, Maharashtra 400070, India\"', '19.0812532', '72.88859609999997', '2019-11-06', '10:00:00', 'AM', '2019-07-08', '10:00:00', 'AM', '2019-07-05', '12:00:00', 'PM', '2019-07-15 12:34:52', '2019-07-15 12:34:52'),
(24, 2, '1563194638297.jpg', 'Astronomy on Tapppp..', 'Astronomy', 'Each FREE event features accessible, engaging science presentations on topics ranging from planets to black holes to galaxies to the beginning of the Universe. Presenters are from local research and educational institutions. In NYC these include AMNH, Col', 'Astronomy on Tap was created in NYC by Meg Schwamb, now a Postdoctoral Fellow at the Institute of Astronomy & Astrophysics, Academia Sinica (Taiwan). NYC events are currently organized by Emily Rice, an astronomer and professor at the College of Staten Is', 'culture', 'college', '\"India\"', '\"Maharashtra\"', '\"Thane\"', '\"Thane\"', '\"Thane West\"', '\"Jambli Naka\"', '\"400601\"', '\"Datta Mandir Rd, Chendani, Juhu Chandan Society, Jambli Naka, Thane West, Thane, Maharashtra 400601, India\"', '19.1879931', '72.9778867', '2019-07-16', '06:00:00', 'PM', '2019-07-15', '13:00:00', 'AM', '2019-07-15', '12:00:00', 'PM', '2019-07-15 12:43:58', '2019-07-15 12:43:58'),
(25, 1, '1563195027448.jpg', '24 hrs coding Non-Strop', 'coding event', 'CodeChef is back with the next date for CodeChef Certification exam on DSA. The next exam will be held on 22nd September across 22+ cities of India. You can now start enrolling yourself. ....', 'Registrations for the next CodeChef Certification on DSA have now started. You can now enroll yourself at a super early bird discount price till 7th August and save ?1000/-.', 'coding', 'college', '\"India\"', '\"Maharashtra\"', '\"Mumbai Suburban\"', '\"Mumbai\"', '\"Bandra East\"', '\"Naupada\"', 'NA', '\"Bandra Terminus, Naupada, Bandra East, Mumbai, Maharashtra, India\"', '19.0635747', '72.84047029999999', '2019-09-16', '09:00:00', 'AM', '2019-07-16', '09:00:00', 'AM', '2019-07-25', '12:00:00', 'PM', '2019-07-15 12:50:27', '2019-07-15 12:50:27'),
(26, 1, '1563195697317.jpg', 'REMIX, DJ AND CREATION CONTESTS', 'trance dj', 'Are you looking for a remix contest? or creation/DJ contest? We list all our official contests. Participate now on Soonvibes!...', 'Sanchez began to play nightclubs in New York City, and later around the world. Along with fellow New York house DJs Erick Morillo, David Morales and Danny Tenaglia, Sanchez has become well known in the European club circuit, especially on the Spanish isla', 'trance', 'German techno', 'Germany', '\"Hessen\"', '\"Darmstadt\"', '\"Neckarsteinach\"', 'NA', 'NA', '\"69239\"', '\"Neckargemünder Str. 9, 69239 Neckarsteinach, Germany\"', '49.4084659', '8.834348800000043', '2019-07-22', '06:00:00', 'PM', '2019-07-27', '12:00:00', 'PM', '2019-07-26', '12:00:00', 'PM', '2019-07-15 13:01:37', '2019-07-15 13:01:37'),
(27, 1, '1563212015804.jpg', 'Event Partner', 'Event Partner', 'Details Event Planning brings to you a team that is passionate about the arts, elegant surroundings and has a love for exquisite culinary experiences. The founders, Rupali and Mayuri, expertly curate each event with great precision, knowing, that no detai', 'Design is one of the most important aspects of our events; we pride ourselves in elegant design and ensure that your concept is perfectly captured. Our vast experience has provided us with an extensive portfolio, which grows with each passing event.', '', '', '\"India\"', '\"Maharashtra\"', '\"Mumbai Suburban\"', '\"Mumbai\"', '\"Ghatkopar West\"', '\"Amrut Nagar\"', '\"400086\"', '\"R City Mall, 3rd Floor, LBS Rd, Amrut Nagar, Ghatkopar West, Mumbai, Maharashtra 400086, India\"', '19.0997486', '72.91561739999997', '2019-10-31', '06:00:00', 'PM', '2019-07-31', '01:00:00', 'PM', '2019-07-30', '12:00:00', 'PM', '2019-07-15 17:33:35', '2019-07-15 17:33:35'),
(28, 1, '1563212246959.jpg', 'Beta Show Room Event', 'Beta Show room', 'BETA International features a packed programme of events across three busy days. We’ve got seminars, presentations, demonstrations, displays, awards – and a fabulous Fashion Show. Each one is designed to inspire and inform you, help grow your business and', 'New for 2020, the Demonstration Arena in Hall 8 is home to an exciting array of displays and demos from the worlds of equine and canine. We’ve got everything from working dog displays with the UK’s top trainer, Ricky Moloney, to saddle fitting teach-ins w', 'cultural', 'college', '\"India\"', '\"Maharashtra\"', '\"Mumbai Suburban\"', '\"Mumbai\"', '\"Andheri East\"', '\"Railway Colony\"', '\"400058\"', '\"Railway Colony, Andheri East, Railway Colony, Andheri East, Mumbai, Maharashtra 400058, India\"', '19.1180813', '72.84598860000006', '2019-07-29', '06:00:00', 'PM', '2019-07-30', '04:00:00', 'PM', '2019-07-29', '08:00:00', 'PM', '2019-07-15 17:37:27', '2019-07-15 17:37:27'),
(29, 1, 'rockon.jpg', 'Beta Show Room Event', 'Beta Show room', 'BETA International features a packed programme of events across three busy days. We’ve got seminars, presentations, demonstrations, displays, awards – and a fabulous Fashion Show. Each one is designed to inspire and inform you, help grow your business and', 'New for 2020, the Demonstration Arena in Hall 8 is home to an exciting array of displays and demos from the worlds of equine and canine. We’ve got everything from working dog displays with the UK’s top trainer, Ricky Moloney, to saddle fitting teach-ins w', 'cultural', 'college', '\"India\"', '\"Maharashtra\"', '\"Mumbai Suburban\"', '\"Mumbai\"', '\"Andheri East\"', '\"Railway Colony\"', '\"400058\"', '\"Railway Colony, Andheri East, Railway Colony, Andheri East, Mumbai, Maharashtra 400058, India\"', '19.1180813', '72.84598860000006', '2019-08-05', '06:00:00', 'PM', '2019-07-30', '04:00:00', 'PM', '2019-07-29', '08:00:00', 'PM', '2019-07-15 17:37:27', '2019-07-15 17:37:27'),
(30, 1, '1563212501004.jpg', 'Coding Competition hurry up..!', 'Code Jam', 'Google Code Jam is an international programming competition hosted and administered by Google. The competition began in 2003 as a means to identify top engineering talent for potential employment at Google. The competition consists of a set of algorithmic', 'On this page, you can see results and code from past rounds of Code Jam (from 2008 to 2017) and related spin-offs. Best of all, you can try the problems yourself! We encourage you to explore the scoreboards, read through the problem sets, and practice!', 'coding', 'google', '\"India\"', '\"Maharashtra\"', '\"Mumbai Suburban\"', '\"Mumbai\"', '\"Ghatkopar East\"', '\"Sindhu Wadi\"', '\"400077\"', '\"Ghatkopar, Adoni Compound, Sindhu Wadi, Ghatkopar East, Mumbai, Maharashtra 400077, India\"', '19.0923481', '72.91373410000006', '2019-02-26', '10:00:00', 'AM', '2019-07-29', '10:00:00', 'AM', '2019-07-27', '10:00:00', 'PM', '2019-07-15 17:41:41', '2019-07-15 17:41:41'),
(31, 1, '1563213233698.jpg', 'Rock & Roll', 'RockON', 'Rock and roll, also called rock \'n\' roll or rock & roll, style of popular music that originated in the United States in the mid-1950s and that evolved by the mid-1960s into the more encompassing international style known as rock music, though the latter a', 'ock and roll is a genre of popular music that originated and evolved in the United States ...... Tools. What links here · Related changes · Upload file · Special pages · Permanent link · Page information · Wikidata item', 'rock', 'college', '\"India\"', '\"Maharashtra\"', '\"Mumbai Suburban\"', '\"Mumbai\"', '\"Vikhroli West\"', '\"Hanuman Nagar\"', '\"400086\"', '\"Amrut Nagar Rd, Ram Nagar, Hanuman Nagar, Vikhroli West, Mumbai, Maharashtra 400086, India\"', '19.0999776', '72.91420889999995', '2019-07-25', '10:00:00', 'AM', '2019-07-26', '10:00:00', 'PM', '2019-07-23', '10:00:00', 'PM', '2019-07-15 17:53:53', '2019-07-15 17:53:53'),
(32, 9, '1563639100213.jpg', 'Fashion & Lifestyle EXHIBITION', 'fashion designer', 'A fashion week is a fashion industry event, lasting approximately one week, wherein fashion designers, brands or \"houses\" display their latest collections in runway fashion shows to buyers and the media. These events influence trends for the current and u', 'A fashion show is an event put on by a fashion designer to showcase their upcoming line of clothing and/or accessories during Fashion Week. Fashion shows debut every season, particularly the Spring/Summer and Fall/Winter seasons. This is where the latest ', 'Fashion', 'Organization', '\"India\"', '\"Maharashtra\"', '\"Mumbai Suburban\"', '\"Mumbai\"', '\"Powai\"', '\"BSNL Colony\"', '\"400076\"', '\"Powai Kailash Complex Link Rd, BSNL Colony, Powai, Mumbai, Maharashtra 400076, India\"', '19.120829', '72.91695819999995', '2019-12-23', '04:00:00', 'PM', '2019-07-05', '13:00:00', 'AM', '2019-07-04', '12:00:00', 'PM', '2019-07-20 16:11:40', '2019-07-20 16:11:40'),
(33, 4, '1563700834098.jpg', 'College & University Hazardous Material Management Conference', 'Festival', 'College & University Hazardous Material Management Conference is the premier conference for College and University hazardous materials professionals. It provides an opportunity to network and...', 'Providing direct access to Philips Arena and the Georgia World Congress Center, this upscale hotel in the CNN Center', 'Fest', 'College', '\"United States\"', '\"Georgia\"', '\"Fulton County\"', '\"Atlanta\"', 'NA', 'NA', '\"30303\"', '\"100 CNN Center NW, Atlanta, GA 30303, USA\"', '33.7590228', '-84.3949283', '2019-08-10', '06:00:00', 'PM', '2019-08-10', '11:00:00', 'PM', '2019-08-08', '12:00:00', 'AM', '2019-07-21 09:20:34', '2019-07-21 09:20:34'),
(34, 4, '30595066_2040145212901670_5818788587916986436_n.jpg', 'Escape The Room...!', 'Escape The Room', 'State-of-the-art separate common rooms for boys and girls, is a part of our thoroughly professional infrastructure. Students can play chess, stretch themselves for a while, watch news channels, etc. during the non-classroom hours. Dedicated locker is prov', 'Worldwide, dormitories are often single sex, or sexes are accommodated on separate floors or in separate rooms in some cases. It is unusual for unrelated mixed sex occupancy of a bedroom except temporarily (for example in a [travel] hostel or a railway sl', 'fest', 'college', 'India', 'Maharashtra', 'Mumbai', 'Mumbai', 'Fort', 'Chhatrapati Shivaji Terminus Area', '400001', 'Chhatrapati Shivaji Terminus Area, Fort, Mumbai, Maharashtra 400001, India', '18.9398446', '72.83544749999999', '2019-01-23', '06:00:00', 'PM', '2019-07-24', '10:00:00', 'AM', '2019-07-22', '12:00:00', 'PM', '2019-07-23 07:28:37', '2019-07-23 07:28:37'),
(35, 2, 'tenor.gif', 'Find The Clues Or Die', 'Fests', 'Escape rooms push you to the limit! They are puzzling, intellectual and emotional roller coasters that keep you on the edge of your seat for 60 (or less) thrilling minutes. The intensity brings out the best in people. The challenge requires teamwork, crea', 'One minute you look up at the room timer and have 54 minutes to go. You’re feeling confident, calm, collected, and then you glance back at the timer and, behold, you only have 12 minutes left. The adrenaline rush is like no other. It’s incredible how fast', 'fests', 'college', 'India', 'Maharashtra', 'Mumbai Suburban', 'Mumbai', 'Bandra East', 'Bandra Kurla Complex', 'NA', 'Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra, India', '19.0687893', '72.8702647', '2019-07-23', '04:00:00', 'AM', '2019-07-23', '02:00:00', 'AM', '2019-07-22', '12:00:00', 'PM', '2019-07-23 07:34:59', '2019-07-23 07:34:59'),
(36, 1, '1564485613913.jpg', 'Top 10 Events', 'events', 'Types of corporate events to find specific information about the planning and organization of common business and corporate events. Below you find a compilation of the most important corporate events for event management. By clicking on a specific link, y', 'fairs are engaging, living advertisements, while career fairs are necessary to recruit college graduates and other superior employees from the rank-and-file lines of unemployment.\n', 'coporate', 'coporate', 'India', 'Maharashtra', 'Mumbai Suburban', 'Mumbai', 'Andheri West', 'Ganga Vihar', '400058', 'Shop Number 2 . Manu Bharati Chs ,Opposite. Bata Showroom Near .Shopper Stop, SV Rd, Zalawad Nagar, Ganga Vihar, Andheri West, Mumbai, Maharashtra 400058, India', '19.114004', '72.84196099999997', '2019-07-30', '07:00:00', 'PM', '2019-08-02', '06:00:00', 'PM', '2019-07-29', '05:00:00', 'AM', '2019-07-30 11:20:13', '2019-07-30 11:20:13'),
(37, 1, '1564486108720.jpg', 'Kumbh Mela 2019', 'events', 'Kumbh Mela is the largest peaceful gathering of pilgrims who come together every three years in Haridwar, Prayagraj, Ujjain, and Nasik. The Kumbh returns to each of these cities after every 12 years to mark the celebration of Hindu heritage...', 'The first royal bath or Kumbh Mela Snan (Shahi Snan) of the Kumbh Mela 2019 took place today, on the auspicious day of Makar Sankranti. All the prominent religious groups take a dip at the Triveni Sangam at Prayagraj today. The second Kumbh Snan will take', 'mela', 'college', 'India', 'Maharashtra', 'Mumbai', 'Mumbai', 'Dadar (w)', 'Babasaheb Ambedkar Nagar', '400028', 'S.K. Bole Road, Omkar Society, Babasaheb Ambedkar Nagar, Dadar (w), Mumbai, Maharashtra 400028, India', '19.0185282', '72.83638189999999', '2019-07-30', '04:00:00', 'AM', '2019-08-04', '02:00:00', 'PM', '2019-07-28', '04:00:00', 'AM', '2019-07-30 11:28:28', '2019-07-30 11:28:28'),
(38, 1, 'maxresdefault.jpg', 'Disney Springs Christmas Events', 'chrismtas', 'Christmas in Goa celebrations include exchanging gifts and offering prayers. The nativity scene is evoked by creating clay statues and artifacts made up of millet grass, box board and hay. Creating clay statues form an important part of the Christmas fest', 'It is remarkable that the celebration of Christmas in Goa is not restricted only to the Christians. People belonging to various communities participate in the festival with immense enthusiasm. In fact, every of the city seems to come alive with the festiv', 'fest', 'college', 'Indonesia', 'West Nusa Tenggara', 'Central Lombok Regency', 'Navi Mumbai', 'CBD Belapur', 'NA', 'NA', 'Gunung Jerulang, Pengengat, Pujut, Central Lombok Regency, West Nusa Tenggara, Indonesia', '-8.848333299999998', '116.3236111', '2019-08-01', '04:00:00', 'AM', '2019-08-04', '04:00:00', 'PM', '2019-07-23', '03:09:00', 'PM', '2019-07-30 11:33:46', '2019-07-30 11:33:46'),
(39, 1, '1564641161103.jpg', 'Hackathon', 'X', 'DSHFLS;DHFL;ASD D DFH;SDH F;S..', 'sdjgkdof dshfkshudfs', 'HACKTHON', 'COLLGE', 'India', 'Maharashtra', 'Mumbai Suburban', 'Mumbai', 'Kurla', 'Vidyavihar Society', '400070', 'Don Bosco Institute Of Technology, Amar Nagar, Vidyavihar Society, Kurla, Mumbai, Maharashtra 400070, India', '19.0812003', '72.88868869999999', '2019-08-02', '04:00:00', 'AM', '2019-08-03', '01:00:00', 'AM', '2019-07-31', '08:00:00', 'PM', '2019-08-01 06:32:41', '2019-08-01 06:32:41'),
(40, 1, '1564641161116.jpeg', 'Hackathon', 'X', 'DSHFLS;DHFL;ASD D DFH;SDH F;S..', 'sdjgkdof dshfkshudfs', 'HACKTHON', 'COLLGE', 'India', 'Maharashtra', 'Mumbai Suburban', 'Mumbai', 'Kurla', 'Vidyavihar Society', '400070', 'Don Bosco Institute Of Technology, Amar Nagar, Vidyavihar Society, Kurla, Mumbai, Maharashtra 400070, India', '19.0812003', '72.88868869999999', '2019-08-02', '04:00:00', 'AM', '2019-08-03', '01:00:00', 'AM', '2019-07-31', '08:00:00', 'PM', '2019-08-01 06:32:41', '2019-08-01 06:32:41'),
(41, 1, '1565458485821.jpg', 'Unfortunate Events', 'Netfkix', 'Despite imploring with you that you look away, you are still here two seasons later, viewing A Series of Unfortunate Events. So with the third and final seas...', 'A Series of Unfortunate Events is a series of thirteen novels written by American author Daniel Handler under the pen name Lemony Snicket. Although they are classified \"children\'s novels\", the books often have a dark, mysterious feeling to them. The books', 'netflix', 'netflix', 'India', 'Maharashtra', 'Mumbai Suburban', 'Mumbai', 'Bandra East', 'Naupada Village', '400051', 'Station Road, Naupada Village, Bandra East, Mumbai, Maharashtra 400051, India', '19.0606618', '72.84155799999996', '2019-08-24', '04:00:00', 'AM', '2019-08-25', '02:00:00', 'PM', '2019-08-23', '06:00:00', 'AM', '2019-08-10 17:34:45', '2019-08-10 17:34:45'),
(42, 1, '1565458777483.jpg', 'We Are Wales', 'football', 'The FIFA World Cup, often simply called the World Cup, is an international association football competition contested by the senior men\'s national teams of the members of the Fédération Internationale de Football Association, the sport\'s global governing ', 'Most successful team(s): Brazil (5 titles)\nNumber of teams: 32 (finals); 211 (eligible to enter qualification)\nFounded: 1930\nRelated competition: FIFA Confederations Cup\nCurrent champions: France national football team, Netherlands', 'football', 'football', 'India', 'Maharashtra', 'Mumbai Suburban', 'Mumbai', 'Andheri East', 'Sher E Punjab Colony', '400093', 'Sher E Punjab, Sher E Punjab Colony, Andheri East, Mumbai, Maharashtra 400093, India', '19.1264077', '72.8639336', '2019-08-31', '06:00:00', 'PM', '2019-09-01', '05:09:00', 'PM', '2019-08-30', '04:09:00', 'PM', '2019-08-10 17:39:37', '2019-08-10 17:39:37'),
(43, 1, '1565459558157.jpg', 'CODE WAR', 'Code', 'Top 20 participants of August Long Challenge from each college/university will win scholarships for CodeChef ...', 'Registrations for the CodeChef Certification on DSA happening on 22nd September are going on in full swing. You can now enroll yourself at a early bird discount price till 25th August and save ', 'coding', 'college', 'India', 'Karnataka', 'Bangalore Urban', 'Bengaluru', 'Vasanth Nagar', 'NA', '560052', 'Vasanth Nagar, Bengaluru, Karnataka 560052, India', '12.998766', '77.59210710000002', '2019-08-10', '11:22:00', 'PM', '2019-08-13', '07:09:00', 'PM', '2019-08-09', '06:08:00', 'PM', '2019-08-10 17:52:38', '2019-08-10 17:52:38');

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
(1, 'Sonu', 'Shahuji', '2010-11-18', 'male', '9999999999', 'sonushahuji4', 'sonu', '1234', '1567878434518.jpg', '2019-06-12 14:07:10', '2019-09-07 17:47:14'),
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
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `follows`
--
ALTER TABLE `follows`
  MODIFY `follow_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `like_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `login_details`
--
ALTER TABLE `login_details`
  MODIFY `login_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `messageboxes`
--
ALTER TABLE `messageboxes`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

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



                          <!-- user suggestion box diplay -->
                          
                          <% if (user.length > 0){ %>
                            <% user.forEach(function(item,  index){%>
                            <div class="card mb-4" id="suggestionBox" data-userid="<%=item.user_id%>">
                                    <div class="card-header">Suggestions</div>
                                    <div class="card-body">
                                        <ul class="nav">
                                                <li class="card-body text-center">
                                                    <div class="row" id="slides" data-userid="<%=item.user_id%>">
                                                            <!-- users displayed from server side using ajax-->
                                                    </div>
                                                  
                                                </li>
                                        </ul>          
                                    </div>
                            </div>
                            <%}); %>
                            <%}%>
