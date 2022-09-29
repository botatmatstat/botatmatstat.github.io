questions = [{
    "question": String.raw`Cовместная функция плотности случайных величин \(\,X\,\) и \(\,Y\,\) имеет вид \[ f(x,y)=\begin{cases} \frac{1}{4}xy, \; \text{ если } x\in[0;2], y\in [0;2] \\ 0, \; \text{ иначе} \end{cases} \]  Найдите функцию распределения \(\,F_Y(y)\,\)`,
    "answers": {
    
            "A": String.raw`
                \[F_Y(y)=\begin{cases} \frac{1}{4}y^2, \; \text{ если } y\in [0;2] \\ 0, \; \text{ иначе} \end{cases}\]
            `,
            "B": String.raw`
                \[F_Y(y)=\begin{cases} 0, \;  y < 0 \\ \frac{1}{4}y^2, \; y\in [0;2] \\ 1, \; y > 2 \end{cases}\]
            `,
            "C": String.raw`
                \[F_Y(y)=\begin{cases} 0, \;  y < 0 \\ y^2, \; y\in [0;2] \\ 0, \; y > 2 \end{cases}\]
            `,
            "D": String.raw`
                \[F_Y(y)=\begin{cases} 0, \;  y < 0 \\ \frac{1}{2}y^2, \; y\in [0;2] \\ 0, \; y > 2 \end{cases}\]
            `,
            "E": String.raw`
                \[F_Y(y)=\begin{cases} y^2, \; \text{ если } y\in [0;2] \\ 0, \; \text{ иначе} \end{cases}\]
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Про случайные величины \(\,X, Y\,\) известно, что \(\,\operatorname{D}(X)=1\,\), \(\,\operatorname{D}(Y)=4\,\), \(\,\operatorname{Cov}(X,Y)=-1\,\). Корреляция \(\,\operatorname{Corr}(X,-2Y)\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,-0.5\,\)
            `,
            "B": String.raw`
                \(\,1\,\)
            `,
            "C": String.raw`
                \(\,0\,\)
            `,
            "D": String.raw`
                \(\,-0.25\,\)
            `,
            "E": String.raw`
                \(\,0.5\,\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Сумма независимых абсолютно непрерывной и дискретной случайных величин имеет распределение`,
    "answers": {
    
            "A": String.raw`
                вырожденное
            `,
            "B": String.raw`
                абсолютно непрерывное
            `,
            "C": String.raw`
                дискретное
            `,
            "D": String.raw`
                сингулярное
            `,
            "E": String.raw`
                нормальное
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`В школе три выпускных класса. В А классе 50% мальчиков, в Б классе — 70% мальчиков, и в В классе — 80%. Я выбираю один класс равновероятно, а затем одного учащегося из этого класса, также равновероятно. Вероятность того, что окажется выбран мальчик равна`,
    "answers": {
    
            "A": String.raw`
                \(\,0.7\,\)
            `,
            "B": String.raw`
                \(\,0.75\,\)
            `,
            "C": String.raw`
                \(\,2/3\,\)
            `,
            "D": String.raw`
                \(\,0.5\,\)
            `,
            "E": String.raw`
                \(\,0.6\,\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Количество скачиваний за день мобильного приложения распределено по Пуассону. В среднем приложение скачивают \(\,12\,\) раз за день. Вероятность того, что приложение будет скачено за день ровно \(\,5\,\) раз, равна`,
    "answers": {
    
            "A": String.raw`
                \(\,e^{-12}\frac{5^{12}}{12!}\,\)
            `,
            "B": String.raw`
                \(\,e^{-5}\frac{5^{12}}{12!}\,\)
            `,
            "C": String.raw`
                \(\,{e}^{-12}\frac{12^5}{5!}\,\)
            `,
            "D": String.raw`
                \(\,\frac{5}{12}\,\)
            `,
            "E": String.raw`
                \(\,e^{-5}\,\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Вероятность поражения мишени при одном выстреле равна \(\,0.8\,\). Случайная величина \(\,\xi_i\,\) равна \(\,1\,\), если при \(\,i\,\)-ом выстреле было попадание, и равна \(\,0\,\) в противном случае. Предел по вероятности последовательности \(\,\frac{\xi_1^{2019} + ... + \xi_n^{2019}}{n}\,\) равен`,
    "answers": {
    
            "A": String.raw`
                \(\,0.8^{2019}\,\)
            `,
            "B": String.raw`
                \(\,0.2\,\)
            `,
            "C": String.raw`
                \(\,0.5\,\)
            `,
            "D": String.raw`
                \(\,0.8\,\)
            `,
            "E": String.raw`
                \(\,0\,\)
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Случайная величина \(\,X\,\) имеет равномерное распределение. Возможной функцией плотности величины \(\,X\,\) является`,
    "answers": {
    
            "A": String.raw`
                \(\,f(x) = \begin{cases} 1/5, x \in [-5;5] \\ 0, x\notin [-5;5] \end{cases}\,\)
            `,
            "B": String.raw`
                \(\,f(x) = \begin{cases} 1/20, x \in [30;50] \\ 0, x\notin [30;50] \end{cases}\,\)
            `,
            "C": String.raw`
                \(\,f(x) = \begin{cases} 1/50, x \in [30;50] \\ 0, x\notin [30;50] \end{cases}\,\)
            `,
            "D": String.raw`
                \(\,f(x) = \begin{cases} x/30, x \in [30;50] \\ 0, x\notin [30;50] \end{cases}\,\)
            `,
            "E": String.raw`
                \(\,f(x) = \begin{cases} 1/30, x \in [30;50] \\ 0, x\notin [30;50] \end{cases}\,\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Для любой функции распределения \(\,F_X(x)\,\) верно, что`,
    "answers": {
    
            "A": String.raw`
                она не убывает
            `,
            "B": String.raw`
                \(\,F_X(x) > 0\,\)
            `,
            "C": String.raw`
                она не возрастает
            `,
            "D": String.raw`
                \(\,F_{X}(x)\,\) принимает любые значения на \(\,[0, +\infty)\,\)
            `,
            "E": String.raw`
                она возрастает
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Величины \(\,\xi_1\,\), \(\,\xi_2\,\), ...~независимы и имеют таблицы распределения  \begin{tabular}{ccc} \toprule   $x$                     & $-1$   & $1$   \\    $\operatorname{P}(\xi_i = x)$        & $1/2$       & $1/2$   \\ \bottomrule \end{tabular}  Рассмотрим их сумму \(\,S_n = \xi_1 + ... + \xi_n\,\). Предел \(\,\lim_{n \to \infty}\operatorname{P}\Bigl(\frac{S_n - \operatorname{E}(S_n)}{\sqrt{\operatorname{D}(S_n)}} > 2\Bigr)\,\) равен`,
    "answers": {
    
            "A": String.raw`
                \(\,1\,\)
            `,
            "B": String.raw`
                \(\,\int_{2}^{+\infty}\frac{1}{\sqrt{2\pi}}\,e^{-t^2/2}\,dt\,\)
            `,
            "C": String.raw`
                \(\,\int_{-\infty}^{2}\frac{1}{\sqrt{2\pi}}\,e^{-t^2/2}\,dt\,\)
            `,
            "D": String.raw`
                \(\,\int_{2}^{+\infty} e^{-t^2/2}\,dt\,\)
            `,
            "E": String.raw`
                \(\,0.5\,\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Для дискретной случайной величины функция распределения`,
    "answers": {
    
            "A": String.raw`
                вырождена
            `,
            "B": String.raw`
                имеет разрывы
            `,
            "C": String.raw`
                не определена
            `,
            "D": String.raw`
                строго возрастает
            `,
            "E": String.raw`
                непрерывна
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Про линейно связанные случайные величины \(\,X\,\) и \(\,Y\,\), известно, что \(\,\operatorname{D}(X)=1\,\), \(\,\operatorname{D}(Y)=4\,\). Дисперсия их суммы может быть равна`,
    "answers": {
    
            "A": String.raw`
                \(\,4\,\)
            `,
            "B": String.raw`
                \(\,3\,\)
            `,
            "C": String.raw`
                \(\,1\,\)
            `,
            "D": String.raw`
                \(\,2\,\)
            `,
            "E": String.raw`
                \(\,5\,\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Величины \(\,X\,\) и \(\,Y\,\) одинаково распределены и равновероятно принимают только два значения, \(\,-1\,\) и \(\,1\,\), при этом \(\,\operatorname{P}(Y=1|X=1)=0.4\,\). Вероятность \(\,\operatorname{P}(Y=-1,X=1)\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,1\,\)
            `,
            "B": String.raw`
                \(\,0.4\,\)
            `,
            "C": String.raw`
                \(\,0.6\,\)
            `,
            "D": String.raw`
                \(\,0.3\,\)
            `,
            "E": String.raw`
                \(\,0.5\,\)
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Известно, что \(\,\operatorname{P}(A\cap B)= 0.3\,\), \(\,\operatorname{P}(B|A)=0.6\,\). Вероятность того, что событие \(\,A\,\) произойдет, а событие \(\,B\,\) не произойдёт, равна`,
    "answers": {
    
            "A": String.raw`
                \(\,0.2\,\)
            `,
            "B": String.raw`
                \(\,0.5\,\)
            `,
            "C": String.raw`
                \(\,0.8\,\)
            `,
            "D": String.raw`
                \(\,2/3\,\)
            `,
            "E": String.raw`
                \(\,1/3\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Случайная величина \(\,X\,\) имеет непрерывное распределение, при этом \(\,\operatorname{P}(X\leq 3)=0.25\,\) и \(\,\operatorname{P}(X>0.25)=0.8\,\). Квантиль порядка \(\,0.25\,\) величины \(\,X\,\) может быть равен`,
    "answers": {
    
            "A": String.raw`
                \(\,0.25\,\)
            `,
            "B": String.raw`
                \(\,0.2\,\)
            `,
            "C": String.raw`
                \(\,3\,\)
            `,
            "D": String.raw`
                \(\,0.8\,\)
            `,
            "E": String.raw`
                \(\,0.75\,\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Величина \(\,X\,\) имеет биномиальное распределение с параметрами \(\,n\,\) и \(\,p\,\). Дисперсия величины \(\,X\,\) максимальна при \(\,p\,\) равном`,
    "answers": {
    
            "A": String.raw`
                \(\,0.25\,\)
            `,
            "B": String.raw`
                \(\,0.75\,\)
            `,
            "C": String.raw`
                \(\,0.5\,\)
            `,
            "D": String.raw`
                \(\,0.9\,\)
            `,
            "E": String.raw`
                \(\,0.2\,\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Совместная функция плотности пары случайных величин \(\,X\,\) и \(\,Y\,\) имеет вид \[ f(x,y)=\begin{cases} c (2x+y), \; \text{ если } x\in[0;2], y\in [0;2] \\ 0, \; \text{ иначе} \end{cases} \]  Константа \(\,c\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,1/8\,\)
            `,
            "B": String.raw`
                \(\,8\,\)
            `,
            "C": String.raw`
                \(\,12\,\)
            `,
            "D": String.raw`
                \(\,1/12\,\)
            `,
            "E": String.raw`
                \(\,1/6\,\)
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Дисперсию случайной величины \(\,X\,\) можно найти, зная`,
    "answers": {
    
            "A": String.raw`
                \(\,F_Y(x)\,\)
            `,
            "B": String.raw`
                \(\,(\operatorname{E}(X))^2\,\) и \(\,\operatorname{E}(X)\,\)
            `,
            "C": String.raw`
                \(\,\operatorname{E}(XY)\,\) и \(\,\operatorname{E}(Y)\,\)
            `,
            "D": String.raw`
                \(\,\operatorname{Cov}(X,Y)\,\) и \(\,\operatorname{D}(Y)\,\)
            `,
            "E": String.raw`
                \(\,\operatorname{E}(X^2)\,\) и \(\,\operatorname{E}(X)\,\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Случайная величина \(\,X\,\) равномерно распределена на отрезке от \(\,-2\,\) до \(\,2\,\). Вероятность \(\,\operatorname{P}(X^2>0.64)\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,0.8\,\)
            `,
            "B": String.raw`
                \(\,0.2\,\)
            `,
            "C": String.raw`
                \(\,0.1\,\)
            `,
            "D": String.raw`
                \(\,0.6\,\)
            `,
            "E": String.raw`
                \(\,\frac{1}{2\sqrt{2}}\,\)
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Величина \(\,X\,\) с равными вероятностями принимает только два значения, \(\,-1\,\) и \(\,1\,\), и \(\,\operatorname{E}(Y|X=x)=1\,\). Ожидание \(\,\operatorname{E}(Y)\,\) равно`,
    "answers": {
    
            "A": String.raw`
                \(\,0\,\)
            `,
            "B": String.raw`
                \(\,0.5\,\)
            `,
            "C": String.raw`
                \(\,1\,\)
            `,
            "D": String.raw`
                \(\,0.5\,\)
            `,
            "E": String.raw`
                \(\,-1\,\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Случайная величина \(\,X\,\) имеет функцию плотности \(\,f(x) = 3x^2\,\) на отрезке \(\,[0;1]\,\). Ожидание \(\,\operatorname{E}(1/X)\,\) равно`,
    "answers": {
    
            "A": String.raw`
                \(\,1/3\,\)
            `,
            "B": String.raw`
                \(\,3/2\,\)
            `,
            "C": String.raw`
                \(\,2\,\)
            `,
            "D": String.raw`
                \(\,1\,\)
            `,
            "E": String.raw`
                \(\,2/3\,\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Cовместная функция плотности случайных величин \(\,X\,\) и \(\,Y\,\) имеет вид \[ f(x,y)=\begin{cases} \frac{1}{4}xy, \; \text{ если } x\in[0;2], y\in [0;2] \\ 0, \; \text{ иначе} \end{cases} \]  Найдите вероятность \(\,\operatorname{P}(Y = X)\,\)`,
    "answers": {
    
            "A": String.raw`
                \(\,3/4\,\)
            `,
            "B": String.raw`
                \(\,1/4\,\)
            `,
            "C": String.raw`
                \(\,0\,\)
            `,
            "D": String.raw`
                \(\,1/2\,\)
            `,
            "E": String.raw`
                невозможно вычислить на основе имеющихся данных
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Про независимые случайные величины \(\,X\,\) и \(\,Y\,\) известно, что \(\,\operatorname{D}(X)=8\,\), \(\,\operatorname{D}(Y)=1\,\). Корреляция \(\,\operatorname{Corr}(X,-2Y)\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,0\,\)
            `,
            "B": String.raw`
                \(\,-0.025\,\)
            `,
            "C": String.raw`
                \(\,0.5\,\)
            `,
            "D": String.raw`
                \(\,-0.5\,\)
            `,
            "E": String.raw`
                \(\,0.25\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Размер выплаты по страховому полису является неотрицательной величиной с математическим ожиданием 10,000 рублей. Согласно неравенству Маркова, вероятность того, что величина выплаты превысит 30,000 рублей, не превосходит`,
    "answers": {
    
            "A": String.raw`
                \(\,0.73\,\)
            `,
            "B": String.raw`
                \(\,1/3\,\)
            `,
            "C": String.raw`
                \(\,0.13\,\)
            `,
            "D": String.raw`
                \(\,0.5\,\)
            `,
            "E": String.raw`
                \(\,0.3\,\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Маша подбрасывает кубик два раза. Рассмотрим события \(\,A = \{\text{в первый раз выпало чётное число}\}\,\), \(\,B = \{\text{в сумме выпало чётное число}\}\,\) и \(\,C=\{\text{в сумме выпало нечётное число}\}\,\). Независимыми являются пары событий:`,
    "answers": {
    
            "A": String.raw`
                \(\,A\,\) и \(\,B\,\); \(\,B\,\) и \(\,C\,\)
            `,
            "B": String.raw`
                \(\,A\,\) и \(\,B\,\); \(\,A\,\) и \(\,C\,\)
            `,
            "C": String.raw`
                только \(\,A\,\) и \(\,B\,\)
            `,
            "D": String.raw`
                \(\,A\,\) и \(\,C\,\); \(\,B\,\) и \(\,C\,\)
            `,
            "E": String.raw`
                только \(\,A\,\) и \(\,C\,\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Величина \(\,Y\,\) имеет экспоненциальное (показательное) распределение с параметром \(\,\lambda=0.5\,\). Величины \(\,X\,\) и \(\,Y\,\) независимы. Ожидание \(\,\operatorname{E}(Y|X=3/4)\,\) равно`,
    "answers": {
    
            "A": String.raw`
                \(\,1\,\)
            `,
            "B": String.raw`
                \(\,\frac{1}{8}\,\)
            `,
            "C": String.raw`
                \(\,\frac{1}{2}\,\)
            `,
            "D": String.raw`
                \(\,2\,\)
            `,
            "E": String.raw`
                \(\,\frac{3}{4}\,\)
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Для энтропий пары случайных величин выполнено соотношение`,
    "answers": {
    
            "A": String.raw`
                \(\,H(Y|X) + H(X|Y) = H(X, Y)\,\)
            `,
            "B": String.raw`
                \(\,H(X) \cdot H(Y) = H(X, Y)\,\)
            `,
            "C": String.raw`
                \(\,H(X\cdot Y) / H(X) = H(Y|X)\,\)
            `,
            "D": String.raw`
                \(\,H(X) + H(Y) = H(X, Y)\,\)
            `,
            "E": String.raw`
                \(\,H(Y|X) + H(X) = H(X, Y)\,\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Плотность величины \(\,X\,\) имеет вид \(\,f(x)=2x\,\) при \(\,0<x<1\,\) и \(\,f(x)=0\,\) при остальных \(\,x\,\). Условная плотность величины \(\,Y\,\) задаётся формулой \(\,f_{Y|X}(y|x)=\begin{cases} \frac{1}{x}, \text{ если } 0<y\le x; \\ 0, \text{ иначе } \end{cases}.\,\) Совместная плотность величин \(\,X\,\) и \(\,Y\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,f(x,y)=\begin{cases} 2, \text{ если } 0<y\le x<1; \\ 0, \text{ иначе} \end{cases}\,\)
            `,
            "B": String.raw`
                \(\,f(x,y)=\begin{cases} 2, \text{ если } 0<y<1, 0 < x<1; \\ 0, \text{ иначе} \end{cases}\,\)
            `,
            "C": String.raw`
                \(\,f(x,y)=\begin{cases} 1, \text{ если } 0<y\le x<1; \\ 0, \text{ иначе} \end{cases}\,\)
            `,
            "D": String.raw`
                \(\,f(x,y)=\begin{cases} 1/x, \text{ если } 0<y<1, 0 < x<1; \\ 0, \text{ иначе} \end{cases}\,\)
            `,
            "E": String.raw`
                \(\,f(x,y)=\begin{cases} 1/x, \text{ если } 0<y\le x<1; \\ 0, \text{ иначе} \end{cases}\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`В урне лежат \(\,7\,\) белых и \(\,5\,\) черных шаров. Из урны достают \(\,5\,\) шаров. Вероятность того, что хотя бы \(\,3\,\) из них окажутся белыми, равна`,
    "answers": {
    
            "A": String.raw`
                \(\,C_5^3 \left( \frac{7}{12} \right)^3 \left( \frac{5}{12} \right)^2\,\)
            `,
            "B": String.raw`
                \(\,\frac{3}{5} \cdot \frac{7}{12}\,\)
            `,
            "C": String.raw`
                \(\,\frac{C_5^3 C_7^2 + C_5^4 C_7^1 + C_5^5 C_7^0}{C_{12}^5}\,\)
            `,
            "D": String.raw`
                \(\,\frac{C_7^3 C_5^2+C_7^4 C_5^1+C_7^5 C_5^0}{C_{12}^5}\,\)
            `,
            "E": String.raw`
                \(\,C_5^3\left( \frac{7}{12} \right)^2\left( \frac{5}{12} \right)^3\,\)
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Известно, что \(\,\operatorname{D}(X)=4\,\), \(\,\operatorname{D}(Y)=9\,\), \(\,\operatorname{Cov}(X, Y)=6\,\). Корреляция \(\,\operatorname{Corr}(X, Y)\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,-0.25\,\)
            `,
            "B": String.raw`
                \(\,1\,\)
            `,
            "C": String.raw`
                \(\,-0.5\,\)
            `,
            "D": String.raw`
                \(\,0.25\,\)
            `,
            "E": String.raw`
                \(\,0.5\,\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Про случайные величины \(\,X, Y, Z\,\) известно, что \(\,\operatorname{E}(X)=1\,\), \(\,\operatorname{E}(Y)=2\,\), \(\,\operatorname{E}(Z)=3\,\). Ожидание \(\,\operatorname{E}(X-Y+2Z)\,\) равно`,
    "answers": {
    
            "A": String.raw`
                \(\,2\,\)
            `,
            "B": String.raw`
                \(\,1\,\)
            `,
            "C": String.raw`
                \(\,4\,\)
            `,
            "D": String.raw`
                \(\,3\,\)
            `,
            "E": String.raw`
                \(\,5\,\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    ]
init_question();   
var result_array = new Array(questions.length);