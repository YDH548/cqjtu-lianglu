// ============================================
// 全局变量
// ============================================
let currentLandmark = null;
let litCount = 0;
const LIT_KEY = 'cqjtu_lit_landmarks';

// ============================================
// 1. 板块切换
// ============================================
function switchTo(panelId) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById(panelId).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.panel === panelId);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTo(btn.dataset.panel));
});

// ============================================
// 2. 地标巡礼：渲染卡片
// ============================================
function renderLandmarks() {
  const grid = document.getElementById('landmark-grid');
  grid.innerHTML = '';

  // 5个核心地标
  landmarksData.forEach(lm => {
    const card = document.createElement('div');
    card.className = 'landmark-card';
    card.dataset.id = lm.id;
    card.innerHTML = `
      <img src="${lm.image}" alt="${lm.name}" loading="lazy">
      <div class="card-name">${lm.name}</div>
      <div class="card-short">${lm.short}</div>
    `;
    card.addEventListener('click', () => openDetail(lm));
    grid.appendChild(card);
  });

  // 精神丰碑合集卡
  grid.appendChild(createCollectionCard(spiritMonument));

  // 园区体验合集卡
  grid.appendChild(createCollectionCard(experienceCollection));

  restoreLitState();
}

// 创建合集卡
function createCollectionCard(collection) {
  const card = document.createElement('div');
  card.className = 'landmark-card full-width';
  card.innerHTML = `
    <img src="${collection.image}" alt="${collection.name}" loading="lazy">
    <div class="card-name">${collection.name}</div>
    <div class="card-short">${collection.short}</div>
  `;
  card.addEventListener('click', () => openCollection(collection));
  return card;
}

// ============================================
// 3. 地标详情弹层
// ============================================
function openDetail(lm) {
  currentLandmark = lm;
  document.getElementById('detail-img').style.display = 'block';  // 恢复图片显示
  document.getElementById('detail-img').src = lm.image;
  document.getElementById('detail-title').textContent = lm.name;
  document.getElementById('detail-story').textContent = lm.story;

  // 音频
  const audio = document.getElementById('detail-audio');
  if (lm.audio) {
    audio.src = lm.audio;
    audio.style.display = 'block';
  } else {
    audio.style.display = 'none';
  }

  // 视频外链
  const videoLink = document.getElementById('detail-video');
  if (lm.video) {
    videoLink.href = lm.video;
    videoLink.style.display = 'block';
  } else {
    videoLink.style.display = 'none';
  }

  // 点亮按钮
  const lightBtn = document.getElementById('light-btn');
  lightBtn.style.display = 'block';
  if (isLit(lm.id)) {
    lightBtn.textContent = '✓ 已点亮';
    lightBtn.disabled = true;
  } else {
    lightBtn.textContent = '点亮此地标';
    lightBtn.disabled = false;
  }

  document.getElementById('detail-modal').classList.add('show');
}

// 打开合集卡
function openCollection(collection) {
  // 合集卡不显示顶部大图，避免和子项图片重复
  document.getElementById('detail-img').style.display = 'none';
  document.getElementById('detail-title').textContent = collection.name;

  // 先显示简介
  let html = '';
  if (collection.intro) {
    html += `<p style="font-size:14px;color:#555;line-height:1.7;margin-bottom:18px;padding:12px;background:#f4f5f7;border-radius:8px;">${collection.intro}</p>`;
  }

  // 再显示每个子项
  collection.items.forEach(item => {
    html += `<div style="margin-bottom:20px;">
      <img src="${item.image}" style="width:100%;border-radius:8px;margin-bottom:8px;">
      <strong style="font-size:15px;color:#1a2a4a;">${item.title}</strong>
      <p style="font-size:13px;color:#666;margin-top:6px;line-height:1.7;">${item.text}</p>
    </div>`;
  });

  document.getElementById('detail-story').innerHTML = html;
  document.getElementById('detail-audio').style.display = 'none';
  document.getElementById('detail-video').style.display = 'none';
  document.getElementById('light-btn').style.display = 'none';
  document.getElementById('detail-modal').classList.add('show');
}

// 关闭弹层
function closeModal(id) {
  document.getElementById(id).classList.remove('show');
  const audio = document.getElementById('detail-audio');
  if (audio) { audio.pause(); audio.currentTime = 0; }
}

// ============================================
// 4. 点亮逻辑
// ============================================
function isLit(id) {
  const lit = JSON.parse(localStorage.getItem(LIT_KEY) || '[]');
  return lit.includes(id);
}

function lightLandmark() {
  if (!currentLandmark || isLit(currentLandmark.id)) return;
  const lit = JSON.parse(localStorage.getItem(LIT_KEY) || '[]');
  lit.push(currentLandmark.id);
  localStorage.setItem(LIT_KEY, JSON.stringify(lit));

  document.getElementById('light-btn').textContent = '✓ 已点亮';
  document.getElementById('light-btn').disabled = true;
  updateProgress();
  restoreLitState();
}

function restoreLitState() {
  const lit = JSON.parse(localStorage.getItem(LIT_KEY) || '[]');
  document.querySelectorAll('.landmark-card').forEach(card => {
    if (lit.includes(card.dataset.id)) {
      card.classList.add('lit');
    }
  });
  litCount = lit.filter(id => landmarksData.some(lm => lm.id === id)).length;
  updateProgress();
}

function updateProgress() {
  document.getElementById('progress-text').textContent = `已点亮 ${litCount} / 5`;
  const badgeArea = document.getElementById('badge-area');
  if (litCount >= 5) {
    badgeArea.innerHTML = '<span class="badge">🏅 甘当路石 · 电子徽章</span>';

    // 如果还没弹过，弹出徽章弹层（只弹一次）
    if (!localStorage.getItem('cqjtu_badge_shown')) {
      document.getElementById('badge-modal').classList.add('show');
      localStorage.setItem('cqjtu_badge_shown', '1');
    }
  } else {
    badgeArea.innerHTML = '';
  }
}

// ============================================
// 5. 校训解读
// ============================================
function renderMotto() {
  const list = document.getElementById('motto-list');
  list.innerHTML = '';
  mottoData.forEach(item => {
    const div = document.createElement('div');
    div.className = 'motto-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="motto-body">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    `;
    list.appendChild(div);
  });
}

// ============================================
// 6. 电子明信片
// ============================================
function renderPostcardSelect() {
  const select = document.getElementById('postcard-select');
  select.innerHTML = '';
  landmarksData.forEach(lm => {
    const opt = document.createElement('option');
    opt.value = lm.id;
    opt.textContent = lm.name;
    select.appendChild(opt);
  });
}

function generatePostcard() {
  const id = document.getElementById('postcard-select').value;
  const text = document.getElementById('postcard-text').value.trim();
  if (!text) { alert('请先写一句话'); return; }

  const lm = landmarksData.find(l => l.id === id);
  const canvas = document.getElementById('postcard-canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = lm.image;

  img.onload = () => {
    const w = 600;
    const h = Math.round(w * img.height / img.width);
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(img, 0, 0, w, h);

    // 底部半透明遮罩
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.fillRect(0, h - 120, w, 120);

    // 地标名
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(lm.name, 20, h - 80);

    // 用户留言
    ctx.font = '16px sans-serif';
    ctx.fillStyle = '#f0f0f0';
    ctx.fillText(text, 20, h - 45);

    // 落款
    ctx.font = '12px sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillText('重庆交通大学 · “两路”精神数字展厅', 20, h - 18);

    document.getElementById('postcard-modal').classList.add('show');
  };
}

// ============================================
// 7. 语音留言（本地录音、本地播放）
// ============================================
let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;

async function toggleRecord() {
  const btn = document.getElementById('record-btn');
  const status = document.getElementById('record-status');

  if (!isRecording) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];
      mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        const playback = document.getElementById('record-playback');
        playback.src = url;
        playback.style.display = 'block';
        status.textContent = '录制完成，可在下方播放';
      };
      mediaRecorder.start();
      isRecording = true;
      btn.textContent = '停止录音';
      status.textContent = '录音中……';
    } catch (err) {
      status.textContent = '无法访问麦克风，请检查权限（需 HTTPS 或 localhost）';
    }
  } else {
    mediaRecorder.stop();
    isRecording = false;
    btn.textContent = '重新录音';
  }
}

// ============================================
// 8. 打卡计数
// ============================================
function updateVisitCount() {
  let count = parseInt(localStorage.getItem('cqjtu_visit_count') || '0');
  count += 1;
  localStorage.setItem('cqjtu_visit_count', count);
  document.getElementById('visit-count').textContent = `你是第 ${count} 位访问者`;
}

// ============================================
// 9. 初始化
// ============================================
window.addEventListener('DOMContentLoaded', () => {
  renderLandmarks();
  renderMotto();
  renderPostcardSelect();
  updateVisitCount();
});