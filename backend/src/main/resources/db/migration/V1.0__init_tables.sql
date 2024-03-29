--
--
--CREATE TABLE IF NOT EXISTS `User` (
--    id_user INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--    firstname VARCHAR(50) NOT NULL,
--    lastname VARCHAR(50) NOT NULL,
--    email VARCHAR(50) NOT NULL UNIQUE,
--    password VARCHAR(50) NOT NULL,
--    role enum('USER','ADMIN') NOT NULL
--    );
--
--
--CREATE TABLE IF NOT EXISTS `Quiz` (
--    id_quiz INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--    id_domain INT NOT NULL,
--    title VARCHAR(100) NOT NULL,
--    description VARCHAR(200) NOT NULL,
--    creation_date DATE NOT NULL,
--    time INT NOT NULL
--    );
--
--
--
--
--CREATE TABLE IF NOT EXISTS `Question` (
--    id_question INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--    id_quiz INT NOT NULL,
--    text VARCHAR(100) NOT NULL,
--    points INT NOT NULL
--    );
--
--
--
--CREATE TABLE IF NOT EXISTS `Answer` (
--    id_answer INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--    id_question INT NOT NULL,
--    answer_text VARCHAR(100) NOT NULL,
--    isCorrect BOOLEAN NOT NULL
--    );
--
--
--
--
--CREATE TABLE IF NOT EXISTS `Domain` (
--    id_domain INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--    domain_name VARCHAR(30) NOT NULL,
--    icon_path VARCHAR(30) NOT NULL
--    );
--
--
--
--CREATE TABLE IF NOT EXISTS `leaderboard_domain` (
--       id_leaderboard INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--       id_user INT NOT NULL,
--       id_domain INT NOT NULL,
--       score INT NOT NULL,
--       time INT NOT NULL
--);
--
--
--CREATE TABLE IF NOT EXISTS `QuizUser` (
--       id INT AUTO_INCREMENT PRIMARY KEY,
--       id_quiz INT NOT NULL,
--       id_user INT NOT NULL,
--       FOREIGN KEY (id_quiz) REFERENCES Quiz(id_quiz),
--       FOREIGN KEY (id_user) REFERENCES User(id_user)
--);
--
--
--CREATE TABLE IF NOT EXISTS `CompletedTests` (
--       id INT AUTO_INCREMENT PRIMARY KEY,
--       id_quiz INT NOT NULL,
--       id_user INT NOT NULL,
--       score INT NOT NULL,
--       date_completed DATE NOT NULL,
--       FOREIGN KEY (id_quiz) REFERENCES Quiz(id_quiz),
--       FOREIGN KEY (id_user) REFERENCES User(id_user)
--);
--
--ALTER TABLE Quiz ADD CONSTRAINT fk_quiz_domain FOREIGN KEY (id_domain) REFERENCES Domain (id_domain);
--ALTER TABLE Question ADD CONSTRAINT fk_question_quiz FOREIGN KEY (id_quiz) REFERENCES Quiz (id_quiz);
--ALTER TABLE Answer ADD CONSTRAINT fk_answer_question FOREIGN KEY (id_question) REFERENCES Question (id_question);
--ALTER TABLE leaderboard_domain ADD CONSTRAINT fk_leaderboard_user FOREIGN KEY (id_user) REFERENCES User (id_user);
--ALTER TABLE leaderboard_domain ADD CONSTRAINT fk_leaderboard_domain FOREIGN KEY (id_domain) REFERENCES Domain (id_domain);
--
--
--
--
--ALTER TABLE User
--    ADD CONSTRAINT email_format CHECK (email REGEXP '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$');
--
--
--
--
--DELIMITER //
--
--CREATE TRIGGER before_insert_Quiz
--    BEFORE INSERT ON `Quiz`
--    FOR EACH ROW
--BEGIN
--    IF NEW.creation_date > CURRENT_DATE THEN
--        SIGNAL SQLSTATE '45000'
--        SET MESSAGE_TEXT = 'Invalid creation_date: Cannot be in the future';
--END IF;
--END //
--
--DELIMITER ;
