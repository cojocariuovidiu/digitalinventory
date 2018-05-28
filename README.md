# digitalinventory
Mean stack for developing Online Inventory Management System


# Secure to connect Database please do not put inportance data in file plese use env variable.
export db_user=""
export db_pass=""
export db_url=""
export db_name=""
export db_role=""
mongodb://' + process.env.db_user + ':' + process.env.db_pass + '@' + process.env.db_url + '/' + process.env.db_name + '?' + process.env.db_role