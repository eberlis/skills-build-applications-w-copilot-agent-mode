from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from djongo import models

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Users
        users = [
            User(name='Spider-Man', email='spiderman@marvel.com', team='Marvel'),
            User(name='Iron Man', email='ironman@marvel.com', team='Marvel'),
            User(name='Wonder Woman', email='wonderwoman@dc.com', team='DC'),
            User(name='Batman', email='batman@dc.com', team='DC'),
        ]
        for user in users:
            user.save()

        # Activities
        activities = [
            Activity(user='Spider-Man', type='Running', duration=30, date='2025-11-24'),
            Activity(user='Iron Man', type='Cycling', duration=45, date='2025-11-23'),
            Activity(user='Wonder Woman', type='Swimming', duration=60, date='2025-11-22'),
            Activity(user='Batman', type='Yoga', duration=20, date='2025-11-21'),
        ]
        for activity in activities:
            activity.save()

        # Leaderboard
        Leaderboard.objects.create(team='Marvel', points=75)
        Leaderboard.objects.create(team='DC', points=80)

        # Workouts
        workouts = [
            Workout(name='Hero HIIT', description='High intensity interval training for heroes.', difficulty='Hard'),
            Workout(name='Power Yoga', description='Yoga for strength and flexibility.', difficulty='Medium'),
        ]
        for workout in workouts:
            workout.save()

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data.'))
