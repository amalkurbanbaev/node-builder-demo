import { Link } from "@tanstack/react-router";
import { Activity, AlertCircle, Clock, Folder, MoreVertical, Pause, Play, Plus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function DashboardView() {
  return (
    <div className="container space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Панель управления</h1>
        <Link to="/flow" className={cn(buttonVariants({ variant: "default" }), "gap-1")}>
          <Plus size={14} />
          <span>Создать новый проект</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Мои проекты */}
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between px-4 pb-1 pt-3">
            <div>
              <CardTitle className="text-base">Мои проекты</CardTitle>
              <CardDescription className="text-xs">Управляйте вашими ИИ проектами</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="h-7 text-xs">
              Все проекты
            </Button>
          </CardHeader>
          <CardContent className="space-y-2 px-4 pt-2">
            {/* Проект 1 */}
            <Link to="/flow" className="hover:bg-muted/50 flex items-center space-x-3 rounded-lg p-2 transition-colors">
              <div className="bg-primary/10 rounded-md p-1.5">
                <Folder className="text-primary h-4 w-4" />
              </div>
              <div className="flex-1 space-y-0.5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Анализ данных клиентов</p>
                  <Badge variant="outline" className="px-1.5 py-0 text-xs">
                    5 агентов
                  </Badge>
                </div>
                <p className="text-muted-foreground text-xs">Последнее обновление 2 часа назад</p>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <MoreVertical className="h-3 w-3" />
              </Button>
            </Link>

            {/* Проект 2 */}
            <Link to="/flow" className="hover:bg-muted/50 flex items-center space-x-3 rounded-lg p-2 transition-colors">
              <div className="bg-primary/10 rounded-md p-1.5">
                <Folder className="text-primary h-4 w-4" />
              </div>
              <div className="flex-1 space-y-0.5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Генерация контента</p>
                  <Badge variant="outline" className="px-1.5 py-0 text-xs">
                    3 агента
                  </Badge>
                </div>
                <p className="text-muted-foreground text-xs">Последнее обновление вчера</p>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <MoreVertical className="h-3 w-3" />
              </Button>
            </Link>

            {/* Проект 3 */}
            <Link to="/flow" className="hover:bg-muted/50 flex items-center space-x-3 rounded-lg p-2 transition-colors">
              <div className="bg-primary/10 rounded-md p-1.5">
                <Folder className="text-primary h-4 w-4" />
              </div>
              <div className="flex-1 space-y-0.5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Автоматизация поддержки</p>
                  <Badge variant="outline" className="px-1.5 py-0 text-xs">
                    7 агентов
                  </Badge>
                </div>
                <p className="text-muted-foreground text-xs">Последнее обновление 3 дня назад</p>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <MoreVertical className="h-3 w-3" />
              </Button>
            </Link>
          </CardContent>
          <CardFooter className="px-4 py-2">
            <Link to="/flow" className={cn(buttonVariants({ variant: "outline" }), "h-7 w-full gap-1 text-xs")}>
              <Plus size={12} />
              <span>Создать новый проект</span>
            </Link>
          </CardFooter>
        </Card>

        {/* Создать новый проект */}

        <Card className="bg-muted/50">
          <Link to="/flow" className="flex h-full flex-col justify-between">
            <CardHeader className="px-4 py-1">
              <CardTitle className="text-base">Создать новый проект</CardTitle>
              <CardDescription className="text-xs">Начните работу с новым ИИ проектом</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-3 px-4 py-4">
              <div className="bg-background rounded-full p-3">
                <Plus className="text-primary h-6 w-6" />
              </div>
              <div className="space-y-1 text-center">
                <p className="text-muted-foreground text-xs">
                  Создайте новый проект для интеграции ИИ агентов с вашими сервисами
                </p>
              </div>
            </CardContent>
            <CardFooter className="px-4 py-2">
              <Button size="sm" className="w-full text-xs">
                Начать новый проект
              </Button>
            </CardFooter>
          </Link>
        </Card>
      </div>

      {/* Активность в проектах */}
      <Card>
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-base">Активность ИИ агентов</CardTitle>
          <CardDescription className="text-xs">Мониторинг статусов и производительности агентов</CardDescription>
        </CardHeader>
        <CardContent className="px-4">
          <div className="space-y-4">
            {/* Агент 1 */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/agents/agent-1.png" />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">A1</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Агент анализа данных</p>
                    <div className="text-muted-foreground flex items-center text-xs">
                      <Activity className="mr-1 h-2.5 w-2.5" />
                      <span>Активен</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-500 px-1.5 py-0 text-xs">Работает</Badge>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Pause className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <Progress value={78} className="h-1.5" />
              <div className="text-muted-foreground flex justify-between text-[10px]">
                <span>Обработано: 78%</span>
                <span className="flex items-center">
                  <Clock className="mr-1 h-2.5 w-2.5" />
                  Запущен 3 часа назад
                </span>
              </div>
            </div>

            <Separator className="my-1" />

            {/* Агент 2 */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/agents/agent-2.png" />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">A2</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Агент генерации контента</p>
                    <div className="text-muted-foreground flex items-center text-xs">
                      <Activity className="mr-1 h-2.5 w-2.5" />
                      <span>Приостановлен</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-amber-500 px-1.5 py-0 text-xs text-amber-500">
                    Пауза
                  </Badge>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Play className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <Progress value={45} className="h-1.5" />
              <div className="text-muted-foreground flex justify-between text-[10px]">
                <span>Обработано: 45%</span>
                <span className="flex items-center">
                  <Clock className="mr-1 h-2.5 w-2.5" />
                  Приостановлен 1 час назад
                </span>
              </div>
            </div>

            <Separator className="my-1" />

            {/* Агент 3 */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/agents/agent-3.png" />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">A3</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Агент поддержки клиентов</p>
                    <div className="text-muted-foreground flex items-center text-xs">
                      <AlertCircle className="mr-1 h-2.5 w-2.5" />
                      <span>Требует внимания</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive" className="px-1.5 py-0 text-xs">
                    Ошибка
                  </Badge>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MoreVertical className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <Progress value={23} className="h-1.5" />
              <div className="text-muted-foreground flex justify-between text-[10px]">
                <span>Обработано: 23%</span>
                <span className="flex items-center">
                  <Clock className="mr-1 h-2.5 w-2.5" />
                  Ошибка 30 минут назад
                </span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between px-4 py-2">
          <Button variant="outline" size="sm" className="h-7 text-xs">
            Обновить статусы
          </Button>
          <Button variant="ghost" size="sm" className="h-7 text-xs">
            Просмотреть все агенты
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
