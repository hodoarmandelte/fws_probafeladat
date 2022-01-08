-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Jan 08. 13:15
-- Kiszolgáló verziója: 10.4.22-MariaDB
-- PHP verzió: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `fws_probafeladat`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `created_at`, `updated_at`) VALUES
(1, 'Oswaldo Haag', 'tbreitenberg@example.com', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(2, 'Mekhi Breitenberg', 'odickinson@example.net', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(3, 'Prof. Kylee Morar III', 'tsatterfield@example.com', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(4, 'Dewayne Prosacco', 'marisa.yundt@example.net', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(5, 'Dr. Christelle Bednar', 'mdavis@example.com', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(6, 'Vernon Bailey III', 'thompson.verda@example.org', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(7, 'Luna Langworth', 'domenica.hansen@example.net', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(8, 'Waino King', 'kasandra.hegmann@example.com', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(9, 'Joanne Erdman', 'sborer@example.net', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(10, 'Kaleigh Hansen', 'vandervort.abby@example.org', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(11, 'Kaela Ullrich', 'leda29@example.net', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(12, 'Merritt Reinger', 'simeon63@example.org', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(13, 'Wilfred Herman Sr.', 'shanahan.darwin@example.com', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(14, 'Buford O\'Hara', 'candido.cartwright@example.com', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(15, 'Marco Dooley', 'wisozk.lester@example.com', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(16, 'Dandre Weissnat', 'estel27@example.org', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(17, 'Malika Koch', 'durgan.kayden@example.net', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(18, 'Alexandrea Renner V', 'manuel.kessler@example.org', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(19, 'Newell Weissnat', 'utrantow@example.net', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(20, 'Miss Valerie Streich V', 'fletcher07@example.com', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(21, 'Nash Lakin PhD', 'june23@example.com', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(22, 'Daphne Klein', 'lmarquardt@example.org', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(23, 'Victoria Bergstrom', 'toy.max@example.net', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(24, 'Sim Kihn', 'norval64@example.com', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(25, 'Mr. Sigurd Sauer', 'ludwig69@example.org', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(26, 'Audreanne Sipes', 'lillian.green@example.com', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(27, 'Jason Veum', 'helena29@example.net', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(28, 'Marge Jast', 'bertram.heller@example.net', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(29, 'Henri Breitenberg', 'kim.moore@example.org', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(30, 'Jaycee Ratke III', 'phaley@example.org', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(31, 'Clemens Hermiston', 'yschmitt@example.com', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(32, 'Dr. Theresia Kuhic', 'fisher.enola@example.net', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(33, 'Rhianna Gislason', 'wdach@example.net', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(34, 'Maci Collier', 'shany32@example.net', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(35, 'Ms. Joelle Shields V', 'volkman.rozella@example.org', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(36, 'Dr. Walter Bergstrom IV', 'braun.orville@example.com', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(37, 'Emmie Kuvalis', 'schroeder.tressie@example.net', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(38, 'Meaghan Hills', 'rmertz@example.net', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(39, 'Soledad Sipes MD', 'louisa.pouros@example.net', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(40, 'Ms. Christa Stoltenberg II', 'adolfo.jakubowski@example.net', '2022-01-07 10:52:03', '2022-01-07 10:52:03'),
(41, 'Soledad Nienow Sr.', 'rahul.gulgowski@example.org', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(42, 'Mekhi Bergnaum', 'nroberts@example.net', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(43, 'Maryse Abbott', 'edwina.bergstrom@example.org', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(44, 'Ashlee Skiles Sr.', 'alba.rempel@example.org', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(45, 'Diana Gaylord', 'aaliyah.haag@example.net', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(46, 'Mrs. Karen Muller DDS', 'hsmith@example.net', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(47, 'Ruth Wisoky', 'quigley.mina@example.org', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(48, 'Mrs. Clarissa Gislason', 'turcotte.monroe@example.com', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(49, 'Prof. Maggie Runolfsdottir', 'uframi@example.com', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(50, 'Bria Welch Sr.', 'carissa06@example.org', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(51, 'Prof. Ashleigh Windler PhD', 'gayle.morar@example.org', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(52, 'Edgar Romaguera', 'schimmel.petra@example.com', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(53, 'Jaydon DuBuque Sr.', 'trath@example.net', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(54, 'River Keebler Sr.', 'torey.doyle@example.org', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(55, 'Bryana Medhurst', 'zhackett@example.com', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(56, 'Grant Stiedemann', 'lmarvin@example.com', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(57, 'Fern Bergstrom', 'tomasa.heller@example.com', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(58, 'Jovanny Schimmel', 'awyman@example.net', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(59, 'Eliezer Doyle', 'mable97@example.net', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(60, 'Catherine Botsford', 'squitzon@example.com', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(61, 'Jamel Sporer', 'valerie.fisher@example.com', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(62, 'Denis Brown III', 'krodriguez@example.org', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(63, 'Jacey Johnston', 'amoen@example.org', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(64, 'Vicente Adams', 'desmond.corkery@example.net', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(65, 'Clemmie Walker', 'dickinson.jean@example.net', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(66, 'Santa Abernathy', 'elsa54@example.com', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(67, 'Rosemary Will', 'hane.violette@example.org', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(68, 'Jordyn Reynolds', 'abbey.fisher@example.com', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(69, 'Urban Jacobi MD', 'vladimir.raynor@example.org', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(70, 'Elvie Kutch', 'reta.osinski@example.com', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(71, 'Prof. Elva Considine', 'hkemmer@example.net', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(72, 'Erica Streich', 'ileuschke@example.com', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(73, 'Ms. Emie Larson', 'bernier.christina@example.com', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(74, 'Prof. Nicholaus Weimann Sr.', 'hwilliamson@example.net', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(75, 'Bret Zboncak', 'kaylie.blanda@example.org', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(76, 'Lucile Rippin', 'rowland.hettinger@example.net', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(77, 'Burnice Haley', 'viola80@example.com', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(78, 'Ms. Shanelle Dietrich Jr.', 'kgreenholt@example.com', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(79, 'Dr. Amy Barrows V', 'shakira95@example.net', '2022-01-07 10:52:37', '2022-01-07 10:52:37'),
(80, 'Archibald Metz', 'weichmann@example.com', '2022-01-07 10:52:37', '2022-01-07 10:52:37');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_01_07_081902_create_projects_table', 1),
(6, '2022_01_07_083202_create_contacts_table', 1),
(7, '2022_01_07_083411_create_projcontacts_table', 1),
(8, '2022_01_07_123207_create_projectcontacts_table', 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `projectcontacts`
--

CREATE TABLE `projectcontacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `contact_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `projectcontacts`
--

INSERT INTO `projectcontacts` (`id`, `project_id`, `contact_id`, `created_at`, `updated_at`) VALUES
(1, 103, 44, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(2, 10, 31, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(3, 57, 68, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(4, 35, 75, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(5, 17, 66, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(6, 108, 73, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(7, 26, 47, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(8, 116, 12, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(9, 3, 33, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(10, 121, 70, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(11, 119, 32, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(12, 40, 1, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(13, 49, 69, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(14, 96, 31, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(15, 5, 9, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(16, 117, 49, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(17, 78, 28, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(18, 126, 75, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(19, 59, 59, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(20, 65, 5, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(21, 124, 35, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(22, 116, 48, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(23, 91, 55, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(24, 4, 75, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(25, 4, 64, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(26, 107, 71, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(27, 80, 33, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(28, 38, 60, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(29, 31, 57, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(30, 66, 10, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(31, 119, 30, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(32, 47, 25, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(33, 16, 12, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(34, 8, 30, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(35, 58, 30, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(36, 138, 39, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(37, 79, 47, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(38, 121, 9, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(39, 16, 24, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(40, 113, 61, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(41, 121, 23, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(42, 81, 68, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(43, 126, 38, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(44, 50, 31, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(45, 30, 70, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(46, 128, 8, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(47, 59, 36, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(48, 100, 57, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(49, 108, 3, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(50, 49, 61, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(51, 100, 74, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(52, 48, 57, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(53, 6, 73, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(54, 72, 65, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(55, 95, 6, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(56, 26, 29, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(57, 56, 6, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(58, 103, 29, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(59, 117, 48, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(60, 64, 25, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(61, 88, 39, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(62, 13, 26, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(63, 126, 46, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(64, 111, 16, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(65, 108, 45, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(66, 98, 34, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(67, 8, 24, '2022-01-07 11:35:20', '2022-01-07 11:35:20'),
(69, 110, 11, '2022-01-07 11:38:37', '2022-01-07 11:38:37'),
(70, 9, 51, '2022-01-07 11:38:37', '2022-01-07 11:38:37'),
(71, 15, 1, '2022-01-07 11:38:37', '2022-01-07 11:38:37'),
(72, 56, 20, '2022-01-07 11:38:37', '2022-01-07 11:38:37'),
(73, 88, 1, '2022-01-07 11:38:37', '2022-01-07 11:38:37'),
(74, 44, 1, '2022-01-07 11:38:37', '2022-01-07 11:38:37'),
(75, 4, 29, '2022-01-07 11:38:37', '2022-01-07 11:38:37'),
(76, 1, 65, '2022-01-07 11:38:37', '2022-01-07 11:38:37'),
(77, 22, 75, '2022-01-07 11:38:37', '2022-01-07 11:38:37'),
(78, 82, 79, '2022-01-07 11:38:37', '2022-01-07 11:38:37'),
(79, 29, 28, '2022-01-07 11:38:37', '2022-01-07 11:38:37'),
(80, 35, 2, '2022-01-07 11:38:37', '2022-01-07 11:38:37'),
(81, 105, 25, '2022-01-07 11:38:37', '2022-01-07 11:38:37'),
(82, 74, 1, '2022-01-07 11:38:37', '2022-01-07 11:38:37'),
(83, 96, 72, '2022-01-07 11:38:37', '2022-01-07 11:38:37'),
(84, 59, 73, '2022-01-07 11:38:37', '2022-01-07 11:38:37'),
(86, 76, 72, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(87, 66, 22, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(88, 50, 72, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(89, 11, 52, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(90, 60, 38, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(91, 19, 52, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(92, 134, 11, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(93, 131, 29, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(94, 91, 61, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(95, 49, 49, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(96, 137, 3, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(97, 129, 38, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(98, 137, 36, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(99, 8, 61, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(100, 109, 54, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(101, 135, 4, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(102, 13, 45, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(103, 113, 74, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(104, 96, 53, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(105, 76, 45, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(106, 79, 32, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(107, 92, 39, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(108, 117, 40, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(109, 136, 54, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(110, 94, 37, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(111, 53, 33, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(112, 92, 12, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(113, 107, 45, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(114, 57, 56, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(115, 21, 62, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(116, 88, 23, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(117, 91, 69, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(118, 42, 41, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(119, 90, 29, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(120, 52, 26, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(121, 96, 64, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(122, 128, 20, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(123, 81, 71, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(124, 46, 71, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(125, 88, 6, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(126, 138, 29, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(127, 59, 71, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(128, 45, 38, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(129, 30, 50, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(130, 17, 5, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(131, 98, 45, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(132, 114, 75, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(133, 67, 79, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(134, 55, 58, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(135, 77, 15, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(136, 56, 30, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(137, 70, 69, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(138, 58, 79, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(139, 139, 41, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(140, 4, 11, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(141, 136, 34, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(142, 139, 44, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(143, 16, 35, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(144, 76, 26, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(145, 67, 66, '2022-01-07 11:39:52', '2022-01-07 11:39:52'),
(146, 120, 76, '2022-01-07 11:39:52', '2022-01-07 11:39:52');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `projects`
--

INSERT INTO `projects` (`id`, `name`, `desc`, `state`, `created_at`, `updated_at`) VALUES
(1, 'morissette.info#30 Projekt', 'morissette.info -nak készülő 30. projektmunka.', 0, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(2, 'kerluke.com#35 Projekt', 'kerluke.com -nak készülő 35. projektmunka.', 2, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(3, 'wilkinson.biz#36 Projekt', 'wilkinson.biz -nak készülő 36. projektmunka.', 1, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(4, 'hermann.com#57 Projekt', 'hermann.com -nak készülő 57. projektmunka.', 2, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(5, 'jerde.com#90 Projekt', 'jerde.com -nak készülő 90. projektmunka.', 0, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(6, 'schimmel.com#25 Projekt', 'schimmel.com -nak készülő 25. projektmunka.', 2, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(7, 'boyer.biz#55 Projekt', 'boyer.biz -nak készülő 55. projektmunka.', 0, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(8, 'breitenberg.net#91 Projekt', 'breitenberg.net -nak készülő 91. projektmunka.', 1, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(9, 'oreilly.com#10 Projekt', 'oreilly.com -nak készülő 10. projektmunka.', 1, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(10, 'kshlerin.com#97 Projekt', 'kshlerin.com -nak készülő 97. projektmunka.', 0, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(11, 'zieme.info#04 Projekt', 'zieme.info -nak készülő 04. projektmunka.', 1, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(12, 'buckridge.com#65 Projekt', 'buckridge.com -nak készülő 65. projektmunka.', 2, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(13, 'ziemann.com#32 Projekt', 'ziemann.com -nak készülő 32. projektmunka.', 0, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(14, 'okeefe.com#98 Projekt', 'okeefe.com -nak készülő 98. projektmunka.', 0, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(15, 'kulas.com#50 Projekt', 'kulas.com -nak készülő 50. projektmunka.', 0, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(16, 'cruickshank.com#50 Projekt', 'cruickshank.com -nak készülő 50. projektmunka.', 2, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(17, 'feeney.com#86 Projekt', 'feeney.com -nak készülő 86. projektmunka.', 2, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(18, 'kuhlman.com#32 Projekt', 'kuhlman.com -nak készülő 32. projektmunka.', 2, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(19, 'kassulke.com#94 Projekt', 'kassulke.com -nak készülő 94. projektmunka.', 2, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(20, 'stehr.com#36 Projekt', 'stehr.com -nak készülő 36. projektmunka.', 2, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(21, 'upton.com#35 Projekt', 'upton.com -nak készülő 35. projektmunka.', 0, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(22, 'bins.net#18 Projekt', 'bins.net -nak készülő 18. projektmunka.', 0, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(23, 'lind.com#95 Projekt', 'lind.com -nak készülő 95. projektmunka.', 2, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(24, 'oberbrunner.com#29 Projekt', 'oberbrunner.com -nak készülő 29. projektmunka.', 1, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(25, 'muller.com#39 Projekt', 'muller.com -nak készülő 39. projektmunka.', 1, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(26, 'gusikowski.com#37 Projekt', 'gusikowski.com -nak készülő 37. projektmunka.', 2, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(27, 'erdman.net#90 Projekt', 'erdman.net -nak készülő 90. projektmunka.', 1, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(28, 'turcotte.com#02 Projekt', 'turcotte.com -nak készülő 02. projektmunka.', 2, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(29, 'hudson.org#66 Projekt', 'hudson.org -nak készülő 66. projektmunka.', 1, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(30, 'haley.com#13 Projekt', 'haley.com -nak készülő 13. projektmunka.', 1, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(31, 'dickens.net#56 Projekt', 'dickens.net -nak készülő 56. projektmunka.', 2, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(32, 'orn.info#49 Projekt', 'orn.info -nak készülő 49. projektmunka.', 1, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(33, 'hauck.info#10 Projekt', 'hauck.info -nak készülő 10. projektmunka.', 1, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(34, 'swift.info#21 Projekt', 'swift.info -nak készülő 21. projektmunka.', 0, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(35, 'heathcote.com#94 Projekt', 'heathcote.com -nak készülő 94. projektmunka.', 0, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(36, 'hermann.org#15 Projekt', 'hermann.org -nak készülő 15. projektmunka.', 0, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(37, 'cormier.com#82 Projekt', 'cormier.com -nak készülő 82. projektmunka.', 1, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(38, 'dickens.com#64 Projekt', 'dickens.com -nak készülő 64. projektmunka.', 2, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(39, 'von.com#19 Projekt', 'von.com -nak készülő 19. projektmunka.', 0, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(40, 'koelpin.com#64 Projekt', 'koelpin.com -nak készülő 64. projektmunka.', 2, '2022-01-07 11:04:07', '2022-01-07 11:04:07'),
(41, 'koss.org#78 Projekt', 'koss.org -nak készülő 78. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(42, 'veum.com#37 Projekt', 'veum.com -nak készülő 37. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(43, 'weissnat.com#92 Projekt', 'weissnat.com -nak készülő 92. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(44, 'hansen.biz#69 Projekt', 'hansen.biz -nak készülő 69. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(45, 'konopelski.info#46 Projekt', 'konopelski.info -nak készülő 46. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(46, 'mcglynn.com#66 Projekt', 'mcglynn.com -nak készülő 66. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(47, 'farrell.com#67 Projekt', 'farrell.com -nak készülő 67. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(48, 'nolan.com#92 Projekt', 'nolan.com -nak készülő 92. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(49, 'herman.com#47 Projekt', 'herman.com -nak készülő 47. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(50, 'rutherford.org#75 Projekt', 'rutherford.org -nak készülő 75. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(51, 'kshlerin.com#27 Projekt', 'kshlerin.com -nak készülő 27. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(52, 'pollich.info#71 Projekt', 'pollich.info -nak készülő 71. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(53, 'emard.com#90 Projekt', 'emard.com -nak készülő 90. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(54, 'howe.com#07 Projekt', 'howe.com -nak készülő 07. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(55, 'bins.org#02 Projekt', 'bins.org -nak készülő 02. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(56, 'littel.com#55 Projekt', 'littel.com -nak készülő 55. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(57, 'hettinger.com#80 Projekt', 'hettinger.com -nak készülő 80. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(58, 'pfeffer.info#97 Projekt', 'pfeffer.info -nak készülő 97. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(59, 'mraz.com#64 Projekt', 'mraz.com -nak készülő 64. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(60, 'fahey.biz#77 Projekt', 'fahey.biz -nak készülő 77. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(61, 'schumm.com#83 Projekt', 'schumm.com -nak készülő 83. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(62, 'sawayn.com#22 Projekt', 'sawayn.com -nak készülő 22. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(63, 'miller.com#21 Projekt', 'miller.com -nak készülő 21. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(64, 'pfeffer.com#88 Projekt', 'pfeffer.com -nak készülő 88. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(65, 'bogisich.net#73 Projekt', 'bogisich.net -nak készülő 73. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(66, 'cartwright.com#93 Projekt', 'cartwright.com -nak készülő 93. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(67, 'dach.com#29 Projekt', 'dach.com -nak készülő 29. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(68, 'fisher.org#87 Projekt', 'fisher.org -nak készülő 87. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(69, 'mayer.net#22 Projekt', 'mayer.net -nak készülő 22. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(70, 'jacobi.com#10 Projekt', 'jacobi.com -nak készülő 10. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(71, 'hills.net#78 Projekt', 'hills.net -nak készülő 78. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(72, 'schmitt.com#59 Projekt', 'schmitt.com -nak készülő 59. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(73, 'rutherford.com#41 Projekt', 'rutherford.com -nak készülő 41. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(74, 'dare.com#38 Projekt', 'dare.com -nak készülő 38. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(75, 'kovacek.com#34 Projekt', 'kovacek.com -nak készülő 34. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(76, 'crona.com#05 Projekt', 'crona.com -nak készülő 05. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(77, 'wyman.com#66 Projekt', 'wyman.com -nak készülő 66. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(78, 'bernhard.com#06 Projekt', 'bernhard.com -nak készülő 06. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(79, 'glover.com#46 Projekt', 'glover.com -nak készülő 46. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(80, 'parker.com#99 Projekt', 'parker.com -nak készülő 99. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(81, 'becker.com#59 Projekt', 'becker.com -nak készülő 59. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(82, 'gutmann.com#98 Projekt', 'gutmann.com -nak készülő 98. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(83, 'gleichner.info#95 Projekt', 'gleichner.info -nak készülő 95. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(84, 'rohan.com#39 Projekt', 'rohan.com -nak készülő 39. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(85, 'smith.com#97 Projekt', 'smith.com -nak készülő 97. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(86, 'stracke.com#83 Projekt', 'stracke.com -nak készülő 83. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(87, 'pacocha.com#99 Projekt', 'pacocha.com -nak készülő 99. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(88, 'oconnell.net#23 Projekt', 'oconnell.net -nak készülő 23. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(89, 'schmitt.com#56 Projekt', 'schmitt.com -nak készülő 56. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(90, 'deckow.com#22 Projekt', 'deckow.com -nak készülő 22. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(91, 'dach.info#18 Projekt', 'dach.info -nak készülő 18. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(92, 'littel.net#62 Projekt', 'littel.net -nak készülő 62. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(93, 'leffler.com#75 Projekt', 'leffler.com -nak készülő 75. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(94, 'bruen.com#96 Projekt', 'bruen.com -nak készülő 96. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(95, 'botsford.com#52 Projekt', 'botsford.com -nak készülő 52. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(96, 'becker.com#14 Projekt', 'becker.com -nak készülő 14. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(97, 'grady.com#30 Projekt', 'grady.com -nak készülő 30. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(98, 'willms.org#84 Projekt', 'willms.org -nak készülő 84. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(99, 'hegmann.com#02 Projekt', 'hegmann.com -nak készülő 02. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(100, 'mueller.com#56 Projekt', 'mueller.com -nak készülő 56. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(101, 'kshlerin.com#76 Projekt', 'kshlerin.com -nak készülő 76. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(102, 'parisian.net#83 Projekt', 'parisian.net -nak készülő 83. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(103, 'padberg.net#48 Projekt', 'padberg.net -nak készülő 48. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(104, 'hayes.com#78 Projekt', 'hayes.com -nak készülő 78. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(105, 'kilback.net#45 Projekt', 'kilback.net -nak készülő 45. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(106, 'cummings.net#46 Projekt', 'cummings.net -nak készülő 46. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(107, 'ziemann.info#10 Projekt', 'ziemann.info -nak készülő 10. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(108, 'hayes.info#34 Projekt', 'hayes.info -nak készülő 34. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(109, 'gaylord.com#29 Projekt', 'gaylord.com -nak készülő 29. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(110, 'mertz.com#09 Projekt', 'mertz.com -nak készülő 09. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(111, 'schroeder.com#59 Projekt', 'schroeder.com -nak készülő 59. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(112, 'oberbrunner.com#76 Projekt', 'oberbrunner.com -nak készülő 76. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(113, 'nitzsche.com#44 Projekt', 'nitzsche.com -nak készülő 44. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(114, 'bins.com#08 Projekt', 'bins.com -nak készülő 08. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(115, 'smitham.org#13 Projekt', 'smitham.org -nak készülő 13. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(116, 'barrows.org#20 Projekt', 'barrows.org -nak készülő 20. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(117, 'lockman.com#66 Projekt', 'lockman.com -nak készülő 66. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(118, 'sporer.com#86 Projekt', 'sporer.com -nak készülő 86. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(119, 'ledner.com#47 Projekt', 'ledner.com -nak készülő 47. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(120, 'jenkins.com#96 Projekt', 'jenkins.com -nak készülő 96. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(121, 'crist.net#88 Projekt', 'crist.net -nak készülő 88. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(122, 'block.com#43 Projekt', 'block.com -nak készülő 43. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(123, 'blanda.net#67 Projekt', 'blanda.net -nak készülő 67. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(124, 'fritsch.com#41 Projekt', 'fritsch.com -nak készülő 41. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(125, 'kerluke.biz#66 Projekt', 'kerluke.biz -nak készülő 66. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(126, 'abshire.com#58 Projekt', 'abshire.com -nak készülő 58. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(127, 'howell.org#97 Projekt', 'howell.org -nak készülő 97. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(128, 'schaefer.com#47 Projekt', 'schaefer.com -nak készülő 47. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(129, 'kertzmann.com#57 Projekt', 'kertzmann.com -nak készülő 57. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(130, 'fadel.com#80 Projekt', 'fadel.com -nak készülő 80. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(131, 'schamberger.com#92 Projekt', 'schamberger.com -nak készülő 92. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(132, 'mosciski.com#95 Projekt', 'mosciski.com -nak készülő 95. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(133, 'tillman.com#69 Projekt', 'tillman.com -nak készülő 69. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(134, 'bins.net#88 Projekt', 'bins.net -nak készülő 88. projektmunka.', 2, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(135, 'rice.com#60 Projekt', 'rice.com -nak készülő 60. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(136, 'wilkinson.com#41 Projekt', 'wilkinson.com -nak készülő 41. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(137, 'strosin.com#15 Projekt', 'strosin.com -nak készülő 15. projektmunka.', 0, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(138, 'gleichner.com#69 Projekt', 'gleichner.com -nak készülő 69. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(139, 'brekke.info#54 Projekt', 'brekke.info -nak készülő 54. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37'),
(140, 'reilly.com#84 Projekt', 'reilly.com -nak készülő 84. projektmunka.', 1, '2022-01-07 11:04:37', '2022-01-07 11:04:37');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- A tábla indexei `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- A tábla indexei `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- A tábla indexei `projectcontacts`
--
ALTER TABLE `projectcontacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projectcontacts_project_id_foreign` (`project_id`),
  ADD KEY `projectcontacts_contact_id_foreign` (`contact_id`);

--
-- A tábla indexei `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT a táblához `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT a táblához `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `projectcontacts`
--
ALTER TABLE `projectcontacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=148;

--
-- AUTO_INCREMENT a táblához `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `projectcontacts`
--
ALTER TABLE `projectcontacts`
  ADD CONSTRAINT `projectcontacts_contact_id_foreign` FOREIGN KEY (`contact_id`) REFERENCES `contacts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `projectcontacts_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
