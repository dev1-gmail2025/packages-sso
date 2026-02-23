#!/bin/bash

set -e  # Dừng ngay nếu có lỗi

echo "🔁 Pull latest code từ remote..."
git fetch origin

echo ""
git add .
git commit -m 'update'
git push

