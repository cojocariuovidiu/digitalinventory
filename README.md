# digitalinventory
Mean stack for developing Online Inventory Management System


# Secure to connect Database please do not put inportance data in file please use env variable.
export db_user="" <br />
export db_pass="" <br />
export db_url="" <br />
export db_name="" <br />
export db_role="" <br />
mongodb://' + process.env.db_user + ':' + process.env.db_pass + '@' + process.env.db_url + '/' + process.env.db_name + '?' + process.env.db_role