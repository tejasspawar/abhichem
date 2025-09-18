import os
import aiosmtplib
from email.message import EmailMessage

SMTP_HOST = os.environ.get('SMTP_HOST')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))
SMTP_USER = os.environ.get('SMTP_USER')
SMTP_PASS = os.environ.get('SMTP_PASS')
TO_ADDRESS = os.environ.get('CONTACT_NOTIFY_EMAIL')

async def send_contact_email(payload: dict):
    if not SMTP_HOST or not TO_ADDRESS:
        return
    msg = EmailMessage()
    msg['From'] = SMTP_USER or 'no-reply@abhichem.local'
    msg['To'] = TO_ADDRESS
    msg['Subject'] = f"New contact from {payload.get('name') or 'Unknown'}"
    body = '\n'.join([f"{k}: {v}" for k, v in payload.items()])
    msg.set_content(body)
    await aiosmtplib.send(msg, hostname=SMTP_HOST, port=SMTP_PORT, username=SMTP_USER, password=SMTP_PASS, start_tls=True)
