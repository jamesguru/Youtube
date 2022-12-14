-- DIAGNOSIS

-- CREATE DIAGNOSIS

-- CREATE PROCEDURE addDiagnosis @name_treatment NVARCHAR(500),@drug_administered NVARCHAR(500),@doctor_name NVARCHAR(500),
-- @patient_email NVARCHAR(500),@bill INT,@date NVARCHAR(500),@paid int,@description NVARCHAR(4000),@patient_status NVARCHAR(500)
-- AS
-- INSERT INTO diagnosis(name_treatment,drug_administered,doctor_name,patient_email,bill,date,paid,description,patient_status)
-- VALUES(@name_treatment,@drug_administered,@doctor_name,@patient_email,@bill,@date,@paid,@description,@patient_status)

-- UPDATE DIAGNOSIS

-- CREATE PROCEDURE updateDiagnosis @id INT
-- AS
-- UPDATE diagnosis SET paid = 1 WHERE id=@id

-- GET DIAGNOSIS FOR USER

-- CREATE PROCEDURE getDiagnosisForUser @email NVARCHAR(500)
-- AS
-- SELECT * FROM diagnosis WHERE patient_email=@email

-- CHECK DIAGNOSIS

-- CHECK DIAGNOSIS
-- CREATE PROCEDURE checkDiagnosis 
-- AS
-- SELECT * FROM diagnosis WHERE issent=0;

-- UPDATE DIAGNOSIS AND SEND EMAIL
-- CREATE PROCEDURE updateDiagnosisSentEmail
-- AS
-- UPDATE diagnosis SET issent=1 WHERE issent=0


--APPOINTMENT 

--ADD APPOINTMENT

-- CREATE PROCEDURE addAppointment @patient_name NVARCHAR(500),@doctor_email NVARCHAR(500),@date NVARCHAR(500),@patient_email VARCHAR(500) 
-- AS
-- INSERT INTO appointment(patient_name,doctor_email,date,patient_email)
-- VALUES(@patient_name,@doctor_email,@date,@patient_email)

-- CHECK APPOINTMENT 

-- CREATE PROCEDURE checkAppointment
-- AS
-- SELECT * FROM appointment WHERE issent=0;

-- UPDATE STATUS

-- CREATE PROCEDURE updateAppointment
-- AS
-- UPDATE appointment SET issent=1 WHERE issent=0



-- USERS

-- GET ALL USERS

-- CREATE PROCEDURE getAllusers
-- AS
-- SELECT * FROM Users

-- SING UP
-- CREATE PROCEDURE signUp @name NVARCHAR(500),@email NVARCHAR(500),@password NVARCHAR(500),@role NVARCHAR(500)
-- AS
-- INSERT INTO Users(name,email,password,role) VALUES(@name,@email,@password,@role)

-- SIGN IN 

-- CREATE PROCEDURE signin @email NVARCHAR(100), @password NVARCHAR(100)

-- AS

-- SELECT * FROM Users WHERE email=@email AND password=@password


-- DELETE USER

-- CREATE PROCEDURE deleteUsers @id INT
-- AS
-- DELETE FROM Users WHERE id=@id

-- UPDATE USER

-- CREATE PROCEDURE updateRegister @id INT
-- AS
-- UPDATE Users SET issent=1 WHERE id=@id

-- CHECK USER
-- CREATE PROCEDURE getDoctors
-- AS
-- SELECT * FROM Users WHERE role='doctor'

-- CHECK USER

-- CREATE PROCEDURE checkUser
-- AS
-- SELECT * FROM Users WHERE issent=0 


-- UPDATE USER AND SEND EMAIL

-- CREATE PROCEDURE updateUserEmailSent
-- AS
-- UPDATE Users SET issent=1 WHERE issent=0

-- PATIENTS

-- ADD PATIENT 

-- CREATE PROCEDURE addPatient @name NVARCHAR(500),@resident_area NVARCHAR(500),@room_admitted NVARCHAR(500),
-- @admission_no NVARCHAR(500),@id_no INT,@email NVARCHAR(500)
-- AS
-- INSERT INTO patients(name,resident_area,room_admitted,admission_no,id_no,email)
-- VALUES(@name,@resident_area,@room_admitted,@admission_no,@id_no,@email)

-- UPDATE STATUS

-- CREATE PROCEDURE updatePatient @id INT,@status NVARCHAR(500)
-- AS
-- UPDATE patients SET status=@status WHERE id=@id

-- DELETE PATIENTS

-- CREATE PROCEDURE deletePatient @id INT
-- AS
-- DELETE FROM patients WHERE id=@id

-- GET ALL PATIENTS

-- CREATE PROCEDURE getAllPatients
-- AS
-- SELECT * FROM patients

-- CHECK PATIENT

-- CREATE PROCEDURE checkPatient
-- AS
-- SELECT * FROM patient WHERE issent=0; 

-- UPDATE PATIENT AND SEND EMAIL
-- CREATE PROCEDURE updatePatientEmailSent
-- AS
-- UPDATE patients SET issent=1 WHERE issent=0