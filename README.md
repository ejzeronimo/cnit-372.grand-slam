https://container-registry.oracle.com/ords/f?p=113:4:108300941960247:::::

https://www.oracle.com/database/technologies/appdev/quickstartnodeonprem.html

localhost:1521/ORCL

SYS
Oracle

localdomain

docker run -d --env-file ./ora_db_env.dat -p 1521:1521 -p 5500:5500 --name oracle-std --shm-size="8g" container-registry.oracle.com/database/standard