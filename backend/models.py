import os
from databases import Database
import sqlalchemy
from sqlalchemy import Table, Column, Integer, String, Text, MetaData, DateTime
from datetime import datetime

DATABASE_URL = os.environ.get('DATABASE_URL', 'sqlite:///./abhi_chem.db')

database = Database(DATABASE_URL)
metadata = MetaData()

contacts = Table(
    'contacts', metadata,
    Column('id', Integer, primary_key=True),
    Column('name', String(200)),
    Column('email', String(200)),
    Column('company', String(200)),
    Column('mobile', String(50)),
    Column('city', String(100)),
    Column('comments', Text),
    Column('created_at', DateTime, default=datetime.utcnow)
)

engine = sqlalchemy.create_engine(DATABASE_URL, connect_args={"check_same_thread": False} if DATABASE_URL.startswith('sqlite') else {})
metadata.create_all(engine)

async def save_contact(data: dict) -> int:
    query = contacts.insert().values(name=data.get('name'), email=data.get('email'), company=data.get('company'), mobile=data.get('mobile'), city=data.get('city'), comments=data.get('comments'), created_at=datetime.utcnow())
    await database.connect()
    row_id = await database.execute(query)
    await database.disconnect()
    return row_id
