-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2019 at 03:05 PM
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
(1, 3, 16, 'miss you guys..!', '2019-06-28 09:39:08', '2019-06-28 09:39:08');

-- --------------------------------------------------------
ALTER TABLE `follows`
  ADD CONSTRAINT `follows_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `follows_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `follows`
  MODIFY `follow_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
ALTER TABLE `follows`
  ADD PRIMARY KEY (`follow_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `receiver_id` (`user_id`);
  ALTER TABLE `follows`
  ADD CONSTRAINT `follows_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `follows_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `posts` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
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

ALTER TABLE `follows`
  MODIFY `follow_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
ALTER TABLE `follows`
  ADD PRIMARY KEY (`follow_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `receiver_id` (`receiver_id`);
  ALTER TABLE `follows`
  ADD CONSTRAINT `follows_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `follows_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `posts` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Dumping data for table `follows`
--

INSERT INTO `follows` (`follow_id`, `user_id`,`receiver_id`,`status`, `createdAt`, `updatedAt`) VALUES
(1, 1,2, 'requested', '2019-06-26 18:37:07', '2019-06-26 18:37:07'),
(2, 1, 4,'accept', '2019-06-26 18:38:53', '2019-06-26 18:38:53'),
(3, 2, 9,'requested', '2019-06-26 18:37:07', '2019-06-26 18:37:07'),
(4, 4, 1,'accept', '2019-06-26 18:38:53', '2019-06-26 18:38:53'),
(5, 9, 2,'requested', '2019-06-26 18:37:07', '2019-06-26 18:37:07'),
(6, 10, 1,'accept', '2019-06-26 18:38:53', '2019-06-26 18:38:53'),
(7, 10, 3,'requested', '2019-06-26 18:37:07', '2019-06-26 18:37:07');

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
(4, 1, 3, 'liked', '2019-06-24 21:02:53', '2019-06-24 21:02:53');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `event_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `event_message` varchar(255) NOT NULL,
  `e_imagepath` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`event_id`, `user_id`, `event_message`, `e_imagepath`, `createdAt`, `updatedAt`,`receiver_id`) VALUES
(1, 1, 'my first post', '1560348509176.jpg', '2019-06-12 14:08:29', '2019-06-12 14:08:29',1),
(2, 4, 'my first post', '1560349638201.jpg', '2019-06-12 14:27:18', '2019-06-12 14:27:18',4),
(3, 2, 'my first post', '1560349675427.png', '2019-06-12 14:27:55', '2019-06-12 14:27:55',2),
(4, 3, 'my first post', '1560349801816.jpg', '2019-06-12 14:30:01', '2019-06-12 14:30:01',3),
(9, 4, 'my second post', '1560360304730.jpeg', '2019-06-12 17:25:04', '2019-06-12 17:25:04',4),
(16, 1, 'my second post', '1560362165989.jpg', '2019-06-12 17:56:06', '2019-06-12 17:56:06',1),
(17, 1, 'mmsd', '1560362687706.jpg', '2019-06-12 18:04:47', '2019-06-12 18:04:47',1);


INSERT INTO `posts` (`event_id`, `user_id`, `event_message`, `e_imagepath`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'my first post', '1560348509176.jpg', '2019-06-12 14:08:29', '2019-06-12 14:08:29'),
(2, 4, 'my first post', '1560349638201.jpg', '2019-06-12 14:27:18', '2019-06-12 14:27:18'),
(3, 2, 'my first post', '1560349675427.png', '2019-06-12 14:27:55', '2019-06-12 14:27:55'),
(4, 3, 'my first post', '1560349801816.jpg', '2019-06-12 14:30:01', '2019-06-12 14:30:01'),
(9, 4, 'my second post', '1560360304730.jpeg', '2019-06-12 17:25:04', '2019-06-12 17:25:04'),
(16, 1, 'my second post', '1560362165989.jpg', '2019-06-12 17:56:06', '2019-06-12 17:56:06'),
(17, 1, 'mmsd', '1560362687706.jpg', '2019-06-12 18:04:47', '2019-06-12 18:04:47');

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
  ADD KEY `receiver_id` (`user_id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`like_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `event_id` (`event_id`);

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
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `follows`
--
ALTER TABLE `follows`
  MODIFY `follow_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
ALTER TABLE `follows`
  ADD PRIMARY KEY (`follow_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `receiver_id` (`user_id`);

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `like_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

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
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `posts` (`event_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `follows`
--
ALTER TABLE `follows`
  ADD CONSTRAINT `follows_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `follows_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `posts` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `posts` (`event_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

/////////////////////////////////////////////////

[
    {
        "follow_id": 1,
        "user_id": 1,
        "receiver_id": 2,
        "status": "requested",
        "createdAt": "2019-06-26T18:37:07.000Z",
        "updatedAt": "2019-06-26T18:37:07.000Z",
        "Post": {
            "event_id": 2,
            "user_id": 4,
            "event_message": "my first post",
            "e_imagepath": "1560349638201.jpg",
            "createdAt": "2019-06-12T14:27:18.000Z",
            "updatedAt": "2019-06-12T14:27:18.000Z"
        }
    },
    {
        "follow_id": 2,
        "user_id": 1,
        "receiver_id": 4,
        "status": "accept",
        "createdAt": "2019-06-26T18:38:53.000Z",
        "updatedAt": "2019-06-26T18:38:53.000Z",
        "Post": {
            "event_id": 4,
            "user_id": 3,
            "event_message": "my first post",
            "e_imagepath": "1560349801816.jpg",
            "createdAt": "2019-06-12T14:30:01.000Z",
            "updatedAt": "2019-06-12T14:30:01.000Z"
        }
    }
]