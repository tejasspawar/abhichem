from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from models import save_contact
from emailer import send_contact_email
import traceback

router = APIRouter()

class ContactIn(BaseModel):
    name: str
    email: EmailStr
    company: str | None = None
    mobile: str | None = None
    city: str | None = None
    comments: str | None = None

@router.post('/api/contact')
async def receive_contact(payload: ContactIn):
    try:
        contact_id = await save_contact(payload.dict())
        try:
            await send_contact_email(payload.dict())
        except Exception as e:
            print('Email send failed:', e)
        return { 'status': 'ok', 'id': contact_id }
    except Exception as e:
        print('Contact save failed:', traceback.format_exc())
        raise HTTPException(status_code=500, detail='internal error')
