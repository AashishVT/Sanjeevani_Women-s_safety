# 🌸 Sanjeevani – A Guardian on Your Wrist 🌸

**Sanjeevani** is a 24×7 real-time wearable safety band designed to detect critical threats like physical assault, unconsciousness, or abnormal body conditions through advanced biometric sensors — and instantly alert guardians or authorities. Created with the goal of **empowering women’s safety**, it combines emotion, technology, and AI into one life-saving device.

## 🔐 Key Features

- 🔄 **24x7 Active Monitoring**
- 🆘 **Emergency SOS Trigger** (Manual + Automatic)
- 🔐 **Password-Locked Unlock Mechanism**
- 📶 **LoRaWAN GPS Communication**
- 📡 **Real-time Location Tracking**
- 🧠 **AI-based Threat Detection (Voice, Movement, Breath, Muscle)**
- 📊 **Cloud Dashboard (AWS IoT Core)** for law enforcement and family
- 🎤 **Voice Pattern Detection for Distress**
- 💗 **Live Biometric Readings** including:
  - Heart Rate
  - Breathing Pattern
  - Muscle Tension
  - Movement/Fall Detection
  - Proximity & Force Sensing
  - Shock/Vibration alerts

---

## 🧠 Advanced Detection Logic

Sanjeevani intelligently detects:
- Rapid breathing, increased heart rate (panic state)
- Muscle tension (fight/freeze response)
- Sudden falls or jerky motion (assault/struggle)
- Distress voice tone via MEMS microphone
- Tampering or strap unlocking
- Fainting or complete inactivity

All this data is sent to the cloud in real-time and displayed beautifully on a dashboard.

---

## 💻 Tech Stack

### 🔷 Frontend:
- **HTML5, CSS3**
- **Tailwind CSS**
- **TypeScript**
- **Vite.js**

### 🔶 Backend:
- **Node.js**
- **AWS IoT Core**
- **ThingsBoard (optional dashboard)**

### 🟡 Embedded/Hardware:
- **ESP32-S3 Microcontroller**
- **STM32H7 for AI**
- **RAK811 LoRa GPS Module**
- **TP4056 Battery Management**
- **Multiple Sensors:**
  - INMP441 Microphone
  - FSR402 Force Sensor
  - VCNL4010 Proximity Sensor
  - MPU6050 Accelerometer & Gyroscope
  - ADXL345 Shock Sensor
  - sEMG (Muscle Tension)
  - Pulse & Breath Sensors

---

## 📂 Project Structure

