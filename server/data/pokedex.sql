BEGIN;

--
-- Drop tables
--

DROP TABLE IF EXISTS  "pokemon_has_type", "user_has_pokemon", "pokemon", "type", "user" CASCADE;


--
-- Structure table utilisateurs
--

CREATE TABLE IF NOT EXISTS "user" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "firstname" text NOT NULL,
  "lastname" text NOT NULL,
  "email" text NOT NULL,
  "password" text NOT NULL,
  "role" text DEFAULT 'user',
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP
);

--
-- Structure table pokemons
--

CREATE TABLE "pokemon" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "pv" int NOT NULL,
  "attack" int NOT NULL,
  "defense" int NOT NULL,
  "attack_spe" int NOT NULL,
  "defense_spe" int NOT NULL,
  "speed" int NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP
);

--
-- Contenu de la table 'pokemon'
--

INSERT INTO "pokemon" ("id", "name", "pv", "attack", "defense", "attack_spe", "defense_spe", "speed") VALUES
(1, 'Bulbizarre', 45, 49, 49, 65, 65, 45),
(2, 'Herbizarre', 60, 62, 63, 80, 80, 60),
(3, 'Florizarre', 80, 82, 83, 100, 100, 80),
(4, 'Salameche', 39, 52, 43, 60, 50, 65),
(5, 'Reptincel', 58, 64, 58, 80, 65, 80),
(6, 'Dracaufeu', 78, 84, 78, 109, 85, 100),
(7, 'Carapuce', 44, 48, 65, 50, 64, 43),
(8, 'Carabaffe', 59, 63, 80, 65, 80, 58),
(9, 'Tortank', 79, 83, 100, 85, 105, 78),
(10, 'Chenipan', 45, 30, 35, 20, 20, 4),
(11, 'Chrysacier', 50, 20, 55, 25, 25, 3),
(12, 'Papilusion', 60, 45, 50, 80, 80, 7),
(13, 'Aspicot', 40, 35, 30, 20, 20, 5),
(14, 'Coconfort', 45, 25, 50, 25, 25, 3),
(15, 'Dardargnan', 65, 80, 40, 45, 80, 7),
(16, 'Roucool', 40, 45, 40, 35, 35, 5),
(17, 'Roucoups', 63, 60, 55, 50, 50, 7),
(18, 'Roucarnage', 83, 80, 75, 70, 70, 9),
(19, 'Rattata', 30, 56, 35, 25, 35, 7),
(20, 'Rattatac', 55, 81, 60, 50, 70, 9),
(21, 'Piafabec', 40, 60, 30, 31, 31, 7),
(22, 'Rapasdepic', 65, 90, 65, 61, 61, 10),
(23, 'Abo', 35, 60, 44, 40, 54, 5),
(24, 'Arbok', 60, 85, 69, 65, 79, 8),
(25, 'Pikachu', 35, 55, 30, 50, 40, 9),
(26, 'Raichu', 60, 90, 55, 90, 80, 10),
(27, 'Sabelette', 50, 75, 85, 20, 30, 4),
(28, 'Sablaireau', 75, 100, 110, 45, 55, 6),
(29, 'Nidoran F', 55, 47, 52, 40, 40, 4),
(30, 'Nidorina', 70, 62, 67, 55, 55, 5),
(31, 'Nidoqueen', 90, 82, 87, 75, 85, 7),
(32, 'Nidoran M', 46, 57, 40, 40, 40, 5),
(33, 'Nidorino', 61, 72, 57, 55, 55, 6),
(34, 'Nidoking', 81, 92, 77, 85, 75, 8),
(35, 'Melofee', 70, 45, 48, 60, 65, 3),
(36, 'Melodelfe', 95, 70, 73, 85, 90, 6),
(37, 'Goupix', 38, 41, 40, 50, 65, 6),
(38, 'Feunard', 73, 76, 75, 81, 100, 10),
(39, 'Rondoudou', 115, 45, 20, 45, 25, 2),
(40, 'Grodoudou', 140, 70, 45, 75, 50, 4),
(41, 'Nosferapti', 40, 45, 35, 30, 40, 5),
(42, 'Nosferalto', 75, 80, 70, 65, 75, 9),
(43, 'Mystherbe', 45, 50, 55, 75, 65, 3),
(44, 'Ortide', 60, 65, 70, 85, 75, 4),
(45, 'Rafflesia', 75, 80, 85, 100, 90, 5),
(46, 'Paras', 35, 70, 55, 45, 55, 2),
(47, 'Parasect', 60, 95, 80, 60, 80, 3),
(48, 'Mimitoss', 60, 55, 50, 40, 55, 4),
(49, 'Aeromite', 70, 65, 60, 90, 75, 9),
(50, 'Taupiqueur', 10, 55, 25, 35, 45, 9),
(51, 'Triopikeur', 35, 80, 50, 50, 70, 12),
(52, 'Miaouss', 40, 45, 35, 40, 40, 9),
(53, 'Persian', 65, 70, 60, 65, 65, 11),
(54, 'Psykokwak', 50, 52, 48, 65, 50, 5),
(55, 'Akwakwak', 80, 82, 78, 95, 80, 8),
(56, 'Ferosinge', 40, 80, 35, 35, 45, 7),
(57, 'Colossinge', 65, 105, 60, 60, 70, 9),
(58, 'Caninos', 55, 70, 45, 70, 50, 6),
(59, 'Arcanin', 90, 110, 80, 100, 80, 9),
(60, 'Ptitard', 40, 50, 40, 40, 40, 9),
(61, 'Tetarte', 65, 65, 65, 50, 50, 9),
(62, 'Tartard', 90, 85, 95, 70, 90, 7),
(63, 'Abra', 25, 20, 15, 105, 55, 9),
(64, 'Kadabra', 40, 35, 30, 120, 70, 10),
(65, 'Alakazam', 55, 50, 45, 135, 85, 12),
(66, 'Machoc', 70, 80, 50, 35, 35, 3),
(67, 'Machopeur', 80, 100, 70, 50, 60, 4),
(68, 'Mackogneur', 90, 130, 80, 65, 85, 5),
(69, 'Chetiflor', 50, 75, 35, 70, 30, 4),
(70, 'Boustiflor', 65, 90, 50, 85, 45, 5),
(71, 'Empiflor', 80, 105, 65, 100, 60, 7),
(72, 'Tentacool', 40, 40, 35, 50, 100, 7),
(73, 'Tentacruel', 80, 70, 65, 80, 120, 10),
(74, 'Racaillou', 40, 80, 100, 30, 30, 2),
(75, 'Gravalanch', 55, 95, 115, 45, 45, 3),
(76, 'Grolem', 80, 110, 130, 55, 65, 4),
(77, 'Ponyta', 50, 85, 55, 65, 65, 9),
(78, 'Galopa', 65, 100, 70, 80, 80, 10),
(79, 'Ramoloss', 90, 65, 65, 40, 40, 1),
(80, 'Flagadoss', 95, 75, 110, 100, 80, 3),
(81, 'Magneti', 25, 35, 70, 95, 55, 4),
(82, 'Magneton', 50, 60, 95, 120, 70, 7),
(83, 'Canarticho', 52, 65, 55, 58, 62, 6),
(84, 'Doduo', 35, 85, 45, 35, 35, 7),
(85, 'Dodrio', 60, 110, 70, 60, 60, 10),
(86, 'Otaria', 65, 45, 55, 45, 70, 4),
(87, 'Lamantine', 90, 70, 80, 70, 95, 7),
(88, 'Tadmorv', 80, 80, 50, 40, 50, 2),
(89, 'Grotadmorv', 105, 105, 75, 65, 100, 5),
(90, 'Kokiyas', 30, 65, 100, 45, 25, 4),
(91, 'Crustabri', 50, 95, 180, 85, 45, 7),
(92, 'Fantominus', 30, 35, 30, 100, 35, 8),
(93, 'Spectrum', 45, 50, 45, 115, 55, 9),
(94, 'Ectoplasma', 60, 65, 60, 130, 75, 11),
(95, 'Onix', 35, 45, 160, 30, 45, 7),
(96, 'Soporifik', 60, 48, 45, 43, 90, 4),
(97, 'Hypnomade', 85, 73, 70, 73, 115, 6),
(98, 'Krabby', 30, 105, 90, 25, 25, 5),
(99, 'Krabboss', 55, 130, 115, 50, 50, 7),
(100, 'Voltorbe', 40, 30, 50, 55, 55, 100),
(101, 'Electrode', 60, 50, 70, 80, 80, 140),
(102, 'Noeunoeuf', 60, 40, 80, 60, 45, 40),
(103, 'Noadkoko', 95, 95, 85, 125, 65, 55),
(104, 'Osselait', 50, 50, 95, 40, 50, 35),
(105, 'Ossatueur', 60, 80, 110, 50, 80, 45),
(106, 'Kicklee', 50, 120, 53, 35, 110, 87),
(107, 'Tygnon', 50, 105, 79, 35, 110, 76),
(108, 'Excelangue', 90, 55, 75, 60, 75, 30),
(109, 'Smogo', 40, 65, 95, 60, 45, 35),
(110, 'Smogogo', 65, 90, 120, 85, 70, 60),
(111, 'Rhinocorne', 80, 85, 95, 30, 30, 25),
(112, 'Rhinoferos', 105, 130, 120, 45, 45, 40),
(113, 'Leveinard', 250, 5, 5, 35, 105, 50),
(114, 'Saquedeneu', 65, 55, 115, 100, 40, 60),
(115, 'Kangourex', 105, 95, 80, 40, 80, 90),
(116, 'Hypotrempe', 30, 40, 70, 70, 25, 60),
(117, 'Hypocean', 55, 65, 95, 95, 45, 85),
(118, 'Poissirene', 45, 67, 60, 35, 50, 63),
(119, 'Poissoroy', 80, 92, 65, 65, 80, 68),
(120, 'Stari', 30, 45, 55, 70, 55, 85),
(121, 'Staross', 60, 75, 85, 100, 85, 115),
(122, 'M.Mime', 40, 45, 65, 100, 120, 90),
(123, 'Insecateur', 70, 110, 80, 55, 80, 105),
(124, 'Lippoutou', 65, 50, 35, 115, 95, 95),
(125, 'Elektek', 65, 83, 57, 95, 85, 105),
(126, 'Magmar', 65, 95, 57, 100, 85, 93),
(127, 'Scarabrute', 65, 125, 100, 55, 70, 85),
(128, 'Tauros', 75, 100, 95, 40, 70, 110),
(129, 'Magicarpe', 20, 10, 55, 15, 20, 80),
(130, 'Leviator', 95, 125, 79, 60, 100, 81),
(131, 'Lokhlass', 130, 85, 80, 85, 95, 60),
(132, 'Metamorph', 48, 48, 48, 48, 48, 48),
(133, 'Evoli', 55, 55, 50, 45, 65, 55),
(134, 'Aquali', 130, 65, 60, 110, 95, 65),
(135, 'Voltali', 65, 65, 60, 110, 95, 130),
(136, 'Pyroli', 65, 130, 60, 95, 110, 65),
(137, 'Porygon', 65, 60, 70, 85, 75, 40),
(138, 'Amonita', 35, 40, 100, 90, 55, 35),
(139, 'Amonistar', 70, 60, 125, 115, 70, 55),
(140, 'Kabuto', 30, 80, 90, 55, 45, 55),
(141, 'Kabutops', 60, 115, 105, 65, 70, 80),
(142, 'Ptera', 80, 105, 65, 60, 75, 130),
(143, 'Ronflex', 160, 110, 65, 65, 110, 30),
(144, 'Artikodin', 90, 85, 100, 95, 125, 85),
(145, 'Electhor', 90, 90, 85, 125, 90, 100),
(146, 'Sulfura', 90, 100, 90, 125, 85, 90),
(147, 'Minidraco', 41, 64, 45, 50, 50, 50),
(148, 'Draco', 61, 84, 65, 70, 70, 70),
(149, 'Dracolosse', 91, 134, 95, 100, 100, 80),
(150, 'Mewtwo', 106, 110, 90, 154, 90, 130),
(151, 'Mew', 100, 100, 100, 100, 100, 100);


-- --------------------------------------------------------

--
-- Structure de la table 'type'
--


CREATE TABLE "type" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "color" varchar(6) NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP
);

--
-- Contenu de la table "type"
--

INSERT INTO "type" ("id", "name", "color") VALUES
(1, 'Acier', 'aaaabb'),
(2, 'Combat', 'bb5544'),
(3, 'Dragon', '7766ee'),
(4, 'Eau', '3399ff'),
(5, 'Électrik', 'ffbb33'),
(6, 'Feu', 'ff4422'),
(7, 'Glace', '77ddff'),
(8, 'Insecte', 'aabb22'),
(9, 'Normal', 'bbaabb'),
(10, 'Plante', '77cc55'),
(11, 'Poison', 'aa5599'),
(12, 'Psy', 'ff5599'),
(13, 'Roche', 'bbaa66'),
(14, 'Sol', 'ddbb55'),
(15, 'Spectre', '6666bb'),
(16, 'Ténèbres', '665544'),
(17, 'Vol', '6699ff');

-- --------------------------------------------------------

--
-- Structure table pokemon_has_type
--

CREATE TABLE "pokemon_has_type" (
  "pokemon_id" int NOT NULL REFERENCES "pokemon"("id") ON DELETE CASCADE,
  "type_id" int NOT NULL REFERENCES "type"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP
);

--
-- Contenu table pokemon_has_type
--

INSERT INTO "pokemon_has_type" ("pokemon_id", "type_id") VALUES
(1, 10),
(1, 11),
(2, 10),
(2, 11),
(3, 10),
(3, 11),
(4, 6),
(5, 6),
(6, 6),
(6, 17),
(7, 4),
(8, 4),
(9, 4),
(10, 8),
(11, 8),
(12, 8),
(12, 17),
(13, 8),
(13, 11),
(14, 8),
(14, 11),
(15, 8),
(15, 11),
(16, 9),
(16, 17),
(17, 9),
(17, 17),
(18, 9),
(18, 17),
(19, 9),
(20, 9),
(21, 9),
(21, 17),
(22, 9),
(22, 17),
(23, 11),
(24, 11),
(25, 5),
(26, 5),
(27, 14),
(28, 14),
(29, 11),
(30, 11),
(31, 11),
(31, 14),
(32, 11),
(33, 11),
(34, 11),
(34, 14),
(35, 9),
(36, 9),
(37, 6),
(38, 6),
(39, 9),
(40, 9),
(41, 11),
(41, 17),
(42, 11),
(42, 17),
(43, 10),
(43, 11),
(44, 10),
(44, 11),
(45, 10),
(45, 11),
(46, 8),
(46, 10),
(47, 8),
(47, 10),
(48, 8),
(48, 11),
(49, 8),
(49, 11),
(50, 14),
(51, 14),
(52, 9),
(53, 9),
(54, 4),
(55, 4),
(56, 2),
(57, 2),
(58, 6),
(59, 6),
(60, 4),
(61, 4),
(62, 4),
(62, 2),
(63, 12),
(64, 12),
(65, 12),
(66, 2),
(67, 2),
(68, 2),
(69, 10),
(69, 11),
(70, 10),
(70, 11),
(71, 10),
(71, 11),
(72, 4),
(72, 11),
(73, 4),
(73, 11),
(74, 13),
(74, 14),
(75, 13),
(75, 14),
(76, 13),
(76, 14),
(77, 6),
(78, 6),
(79, 4),
(79, 12),
(80, 4),
(80, 12),
(81, 5),
(81, 1),
(82, 5),
(82, 1),
(83, 9),
(83, 17),
(84, 9),
(84, 17),
(85, 9),
(85, 17),
(86, 4),
(87, 4),
(87, 7),
(88, 11),
(89, 11),
(90, 4),
(91, 4),
(91, 7),
(92, 15),
(92, 11),
(93, 15),
(93, 11),
(94, 15),
(94, 11),
(95, 13),
(95, 14),
(96, 12),
(97, 12),
(98, 4),
(99, 4),
(100, 5),
(101, 5),
(102, 10),
(102, 12),
(103, 10),
(103, 12),
(104, 14),
(105, 14),
(106, 2),
(107, 2),
(108, 9),
(109, 11),
(110, 11),
(111, 14),
(111, 13),
(112, 14),
(112, 13),
(113, 9),
(114, 10),
(115, 9),
(116, 4),
(117, 4),
(118, 4),
(119, 4),
(120, 4),
(121, 4),
(121, 12),
(122, 12),
(123, 8),
(123, 17),
(124, 7),
(124, 12),
(125, 5),
(126, 6),
(127, 8),
(128, 9),
(129, 4),
(130, 4),
(130, 17),
(131, 4),
(131, 7),
(132, 9),
(133, 9),
(134, 4),
(135, 5),
(136, 6),
(137, 9),
(138, 13),
(138, 4),
(139, 13),
(139, 4),
(140, 13),
(140, 4),
(141, 13),
(141, 4),
(142, 13),
(142, 17),
(143, 9),
(144, 7),
(144, 17),
(145, 5),
(145, 17),
(146, 6),
(146, 17),
(147, 3),
(148, 3),
(149, 3),
(149, 17),
(150, 12),
(151, 12);

-- --------------------------------------------------------

--
-- Structure table user_has_pokemon
--

CREATE TABLE "user_has_pokemon" (
  "user_id" int NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
  "pokemon_id" int NOT NULL REFERENCES "pokemon"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP
);

-- --------------------------------------------------------

SELECT setval('pokemon_id_seq', (SELECT MAX(id) from "pokemon"));
SELECT setval('type_id_seq', (SELECT MAX(id) from "type"));
SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));

COMMIT;