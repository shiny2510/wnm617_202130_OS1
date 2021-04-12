-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 12, 2021 at 11:53 AM
-- Server version: 5.6.49-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `shiny_wnm608`
--

-- --------------------------------------------------------

--
-- Table structure for table `track_202130_flowers`
--

CREATE TABLE `track_202130_flowers` (
  `id` int(13) NOT NULL,
  `user_id` int(13) NOT NULL,
  `name` varchar(64) NOT NULL,
  `type` varchar(16) NOT NULL,
  `color` varchar(64) NOT NULL,
  `description` text NOT NULL,
  `img` varchar(256) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `track_202130_locations`
--

CREATE TABLE `track_202130_locations` (
  `id` int(13) NOT NULL,
  `animal_id` int(13) NOT NULL,
  `lat` decimal(10,8) NOT NULL,
  `lng` decimal(11,8) NOT NULL,
  `description` text NOT NULL,
  `photo` varchar(256) NOT NULL,
  `icon` varchar(256) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `track_202130_users`
--

CREATE TABLE `track_202130_users` (
  `id` int(13) NOT NULL,
  `name` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(32) NOT NULL,
  `img` varchar(256) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_202130_flowers`
--
ALTER TABLE `track_202130_flowers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `track_202130_locations`
--
ALTER TABLE `track_202130_locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `track_202130_users`
--
ALTER TABLE `track_202130_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_202130_flowers`
--
ALTER TABLE `track_202130_flowers`
  MODIFY `id` int(13) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `track_202130_locations`
--
ALTER TABLE `track_202130_locations`
  MODIFY `id` int(13) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `track_202130_users`
--
ALTER TABLE `track_202130_users`
  MODIFY `id` int(13) NOT NULL AUTO_INCREMENT;
COMMIT;
