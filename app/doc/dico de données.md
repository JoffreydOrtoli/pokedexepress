# Table user

| Column | Type | Specifications / Constraints | Description |
| ----- | ---- | ------------ | ----------- |
| id | INTEGER | PRIMARY KEY, NOT NULL | User identification |
| firstname | TEXT | NOT NULL | User firstname |
| lastname | TEXT | NOT NULL | User lastname |
| mail | TEXT | NOT NULL | User email |
| password | TEXT | NOT NULL | User password |
| role | TEXT | NOT NULL, DEFAULT "user" | Authorization level (user or admin levels) |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW | Creation date |
| updated_at | TIMESTAMP | | Modification date |

# Table pokemon

| Column | Type | Specifications / Constraints | Description |
| ----- | ---- | ------------ | ----------- |
| id | INTEGER | PRIMARY KEY, NOT NULL | Pokemon identification |
| name | TEXT | NOT NULL | Pokemon name |
| pv | INTEGER | NOT NULL | Life pokemon |
| attack | INTEGER | NOT NULL | Attack pokemon |
| defense | INTEGER | NOT NULL | Defense pokemon |
| attack_spe | INTEGER | NOT NULL | Attack spe pokemon |
| defense_spe | INTEGER | NOT NULL | Defense spe pokemon |
| speed | INTEGER | NOT NULL | Speed pokemon |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW | Creation date |
| updated_at | TIMESTAMP | | Modification date |

# Table type

| Column | Type | Specifications / Constraints | Description |
| ----- | ---- | ------------ | ----------- |
| id | INTEGER | PRIMARY KEY, NOT NULL | Type identification |
| name | TEXT | NOT NULL | Type name |
| color | TEXT | NOT NULL | color type |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW | Creation date |
| updated_at | TIMESTAMP | | Modification date |

# Table pokemon_has_type

| Column | Type | Specifications / Constraints | Description |
| ----- | ---- | ------------ | ----------- |
| type_id | ENTITY | PRIMARY KEY, NOT NULL | Type identification (foreign key)|
| pokemon_id | ENTITY | PRIMARY KEY, NOT NULL | Pokemon identification (foreign key)|
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW | Creation date |
| updated_at | TIMESTAMP | | Modification date |

# Table user_has_pokemon

| Column | Type | Specifications / Constraints | Description |
| ----- | ---- | ------------ | ----------- |
| user_id | ENTITY | PRIMARY KEY, NOT NULL | User identification (foreign key)|
| pokemon_id | ENTITY | PRIMARY KEY, NOT NULL | Pokemon identification (foreign key)|
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW | Creation date |
| updated_at | TIMESTAMP | | Modification date |