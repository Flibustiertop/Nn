import itertools
import string
import requests

def check_username(username):
    """
    Проверяет доступность юзернейма в Telegram.
    Если страница t.me/username возвращает 404 (Not Found), юзернейм свободен.
    """
    url = f"https://t.me{username}"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
    try:
        response = requests.get(url, headers=headers, timeout=5)
        # Если юзернейм свободен, Telegram обычно возвращает 404
        if response.status_code == 404:
            return True
        return False
    except Exception as e:
        print(f"Ошибка при проверке {username}: {e}")
        return False

def generate_and_check():
    # Символы, которые разрешены в Telegram (буквы латинского алфавита и цифры)
    chars = string.ascii_lowercase + string.digits
    
    # Генерируем все комбинации из 3 символов
    combinations = itertools.product(chars, repeat=3)
    
    print("Запуск проверки...")
    free_usernames = []
    
    for combo in combinations:
        prefix = ''.join(combo)
        username = f"{prefix}ceo"
        
        # Проверка
        if check_username(username):
            print(f"[СВОБОДЕН] @{username}")
            free_usernames.append(username)
        else:
            print(f"[ЗАНЯТ] @{username}")
            
    print("\nВсе доступные варианты:")
    for u in free_usernames:
        print(u)

if __name__ == "__main__":
    generate_and_check()
