
sudo apt update
sudo apt upgrade
sudo apt install git
git --version

sudo apt install nodejs

sudo apt install npm

nodejs -v

npm -v





sudo apt install mysql-server
sudo mysql_secure_installation

sudo mysql

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;
exit;

GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' IDENTIFIED BY 'password';
exit;